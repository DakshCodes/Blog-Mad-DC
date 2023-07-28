import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import Blog from "../../../../models/Blog";


const handler = async (req, res) => {
    if (req.method !== "POST")
        return errorhandler(res, 400, "Only Post Method is allowed");
    try {
        console.log("here backend")
        await connectDB()
        const data = await req.body;
        const newBlog = await Blog.create(data)

        res.send({
            status: true,
            newBlog
        })
    } catch (error) {
        console.log(error.message);
    }

}

export default handler;