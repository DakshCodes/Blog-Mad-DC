import { connectDB } from "@/lib/db";
import { errorhandler } from "@/middlewares/error";
import User from '@/models/User'
import bcrypt from 'bcryptjs'

const handler = async (req, res) => {
  if (req.method !== "POST")
    return errorhandler(res, 400, "Only Post Method is allowed");

  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return errorhandler(res, 400, "Please Enter  All Feiels");


  await connectDB();

  let user = await User.findOne({ email });

  if (user)
    return errorhandler(res, 400, "User Already Register");

  const hashedPassword = await bcrypt.hash(password, 10)
  user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    succes: true,
    message: "Register Succesfully",
    user

  });


}

export default handler;