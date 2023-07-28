import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import User from "@/models/user";
import bcrypt from 'bcryptjs'

const handler = async (req, res) => {
    if (req.method !== "POST")
        return errorhandler(res, 400, "Only Post Method is allowed");

    const { loginemail, loginpassword } = req.body;
    console.log(loginemail, loginpassword)
    if (!loginemail || !loginpassword)
        return errorhandler(res, 400, "Please Enter  All Feiels");


    await connectDB();

    const user = await User.findOne({ email: loginemail }).select("+password");





    if (!user)
        return errorhandler(res, 400, "Invalid Email or Password");




    const isMatch = await bcrypt.compare(loginpassword, user.password)

    if (!isMatch)
        return errorhandler(res, 400, "Invalid Email or Password");


    if (!user.verified) {
        throw new Error("Please Verify Email")
    }

    
    res.status(200).json({
        succes: true,
        message: `Welcome Back , ${user.username} `,
        user,
    });


}

export default handler;