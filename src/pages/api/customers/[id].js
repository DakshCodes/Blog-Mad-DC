import Token from "@/models/Token";
import User from "@/models/User";


const handler = async (req, res) => {
    if (req.method !== "POST")
        return errorhandler(res, 400, "Only Post Method is allowed");

    try {

        const token = await Token.findOne({
            token: req.params.token,
        })
        console.log(token);


        await User.updateOne({ _id: token.userId }, { $set: { verified: true } });

        await Token.findByIdAndRemove(token._id);

        res.send({
            success: true,
            message: "Email Verified"
        })

    } catch (error) {
        res.send({
            success: false,
            message: "Unable to activate your account"
        })
    }
}

export default handler;