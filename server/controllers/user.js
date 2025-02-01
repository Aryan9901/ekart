import User from "../models/user";
import { generateTokens } from "../utils/generateToken";

const loginOrSignup = async (req, res) => {
  const { phone, address } = req.body;

  try {
    let user = await User.findOne({ phone });
    if (user) {
      user.address = address;
      await user.save();
    } else {
      user = new User({ phone, address });
      await user.save();
    }

    const { accessToken, refreshToken } = generateTokens(user.toObject());
    res.status(200).json({ success: true, user, accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};
