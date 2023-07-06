import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import Blog from "@/models/Blog";


const handler = async (req, res) => {
    if (req.method !== "DELETE")
        return errorhandler(res, 400, "Only GET Method is allowed");
    await connectDB();
    // console.log("Inhandle")
    const id = req.query.id;
    // console.log(id)

    try {
        const blog = await Blog.findByIdAndDelete(id)

        res.status(200).json({
            succes: true,
            blog
        });
    } catch (error) {
        console.log(error);
    }
}

export default handler;