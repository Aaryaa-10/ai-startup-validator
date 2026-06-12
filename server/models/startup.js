import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    startupName: {
      type: String,
      required: true,
    },

    idea: {
      type: String,
      required: true,
    },

    aiAnalysis: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Startup = mongoose.model("Startup", startupSchema);

export default Startup;