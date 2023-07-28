import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    userid: {
        type: String,
        ref: "User",
        required:true
    },
    token: {
        type: String,
        required: true,
    }
})

export default mongoose?.models?.Token || mongoose.model("Token", tokenSchema)