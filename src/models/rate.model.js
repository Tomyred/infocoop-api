import mongoose from "mongoose";

export const schema = new mongoose.Schema({
    description:{type: String, required: true},
    value: {type: Number, required: true},
    type:{type: String, required: true},
    observations: {type: String, required: false}
})

export default mongoose.model("rate", schema);