import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Simple validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill all fields" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Create new contact submission
    const newContact = {
      name,
      email,
      subject,
      message,
      date: new Date(),
    };

    // Save to database
    const result = await db.collection("contacts").insertOne(newContact);

    // Send email notification
    try {
      await sendContactNotification({ name, email, subject, message });
      console.log("Email notification sent successfully");
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // We don't return an error response here because the form submission was successful
      // We just log the email error but still consider the form submission successful
    }

    return NextResponse.json({
      success: true,
      data: { ...newContact, _id: result.insertedId },
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
