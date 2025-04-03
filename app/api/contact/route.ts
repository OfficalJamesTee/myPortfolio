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
    try {
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
      console.log("MongoDB submission successful:", result.insertedId);

      // Send email notification
      try {
        await sendContactNotification({ name, email, subject, message });
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We still return success if the database submission worked
        return NextResponse.json({
          success: true,
          message:
            "Your message was saved but email notification failed. We'll still receive your message.",
          data: { ...newContact, _id: result.insertedId },
        });
      }

      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
        data: { ...newContact, _id: result.insertedId },
      });
    } catch (dbError) {
      console.error("MongoDB connection error:", dbError);
      return NextResponse.json(
        {
          success: false,
          message: "Database connection failed. Please try again later.",
          error:
            dbError instanceof Error
              ? dbError.message
              : "Unknown database error",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
