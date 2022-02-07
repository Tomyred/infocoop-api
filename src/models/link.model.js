import mongoose from "mongoose";

export const schema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false },
        link: { type: String, required: true },
    },
    { timestamps: true }
);
