import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ loggedIn: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ loggedIn: true, user: decoded });
  } catch (err) {
    return res.status(200).json({ loggedIn: false });
  }
}
