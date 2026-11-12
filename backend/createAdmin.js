
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./model/Admin.js");

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "admin@nutrinoven.com";
    const password = "Pass100000";

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.findOneAndUpdate(
      { email },
      {
        $set: { password: hashedPassword },
        $setOnInsert: { email },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    console.log("Admin created or password updated:", admin.email);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();
