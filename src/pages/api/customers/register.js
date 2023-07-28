import { connectDB } from "@/lib/db";
import EmailHandler from "@/middlewares/EmailHandler";
import { errorhandler } from "@/middlewares/error";
import Token from "@/models/Token";
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

  // create verification token
  const token = new Token({
    userId: user._id,
    token: crypto.randomBytes(16).toString("hex"),
  });

  await token.save();
  console.log(token)

  const link = `${process.env.FRONT_URL}/users/confirm/${token.token}`

  await EmailHandler(user.email, link, 1);

  res.status(201).json({
    succes: true,
    message: "Register Succesfully",
    user
  });
}

export default handler;