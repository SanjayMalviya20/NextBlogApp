import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://sanjay:sanjaymalviyamongodb@sanjay.fdp92.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error", error);
  }
};