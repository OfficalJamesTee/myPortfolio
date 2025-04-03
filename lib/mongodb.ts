import { MongoClient, type Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";
const MONGODB_DB = process.env.MONGODB_DB || "portfolio";

// Check if MongoDB URI is defined
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  // If we have a cached connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  // Create a new MongoDB client with more detailed options
  const client = new MongoClient(MONGODB_URI, {
    // Add connection options if needed
  });

  try {
    // Connect to the client
    await client.connect();
    console.log("Connected to MongoDB successfully");

    // Get the database
    const db = client.db(MONGODB_DB);

    // Test the connection with a simple command
    await db.command({ ping: 1 });
    console.log(`Database ${MONGODB_DB} is accessible`);

    // Cache the client and db connections
    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
