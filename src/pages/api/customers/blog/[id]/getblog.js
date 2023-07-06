import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import Blog from "@/models/Blog";


const handler = async (req, res) => {
    if (req.method !== "GET")
        return errorhandler(res, 400, "Only GET Method is allowed");
    await connectDB();
    // console.log(req.query)
    const id = req.query.id;

    try {
        const blog = await Blog.findById(id).populate("authorId").select('-password')
        res.status(200).json({
            succes: true,
            blog
        });
    } catch (error) {
        console.log(error);
    }
}

export default handler;