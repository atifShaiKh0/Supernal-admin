import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "Supernal_Admin",
      serverSelectionTimeoutMS: 30000,
    });
    isConnected = true;
    console.log("Using database : ", mongoose.connection.name);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
