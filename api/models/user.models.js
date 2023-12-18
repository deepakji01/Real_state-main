import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
