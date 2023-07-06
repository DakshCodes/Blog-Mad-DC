import { Context } from "@/components/Clients";
import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import Blog from "@/models/Blog";
import { useContext } from "react";


const handler = async (req, res) => {
    const { user } = useContext(Context)
    if (req.method !== "GET")
        return errorhandler(res, 400, "Only GET Method is allowed");
    await connectDB();
    const id = req.query.id;

    try {
        const blog = await Blog.findById(id)

        if (blog.likes.includes(user._id)) {
            blog.likes = blog.likes.filter((id) => id.toString() !== user._id.toString())
        } else {
            blog.likes.push(user._id)
        }

        await blog.save()

        res.status(200).json({
            succes: true,
            blog
        });
    } catch (error) {
        console.log(error);
    }
}

export default handler;