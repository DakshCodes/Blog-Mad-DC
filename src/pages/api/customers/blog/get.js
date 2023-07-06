import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import Blog from "../../../../models/Blog";


const handler = async (req, res) => {
    if (req.method !== "GET")
        return errorhandler(res, 400, "Only GET Method is allowed");

    try {
        await connectDB()
        const blogs = await Blog.find({})
        res.send({
            status:true,
            blogs
        })
    } catch (error) {
        console.log(error.message);
    }

}

export default handler;