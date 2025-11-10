import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const tokenFromCookie = req.cookies?.token;
  const authHeader = req.headers?.authorization || req.headers?.Authorization;
  const tokenFromHeader = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenDecode.id) {
      return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    req.userId = tokenDecode.id;
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;
