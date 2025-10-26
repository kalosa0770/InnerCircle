import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {

  // Accept token from cookie or Authorization header
  const tokenFromCookie = req.cookies && req.cookies.token;
  const authHeader = req.headers && (req.headers.authorization || req.headers.Authorization);
  const tokenFromHeader = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return res.json({success: false, message: 'Not Authorized. Login Again'});
  }

    try {

      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

      if (tokenDecode.id) {
        // attach userId to the request object (preferred over mutating req.body)
        req.userId = tokenDecode.id;
      } else {
        return res.json({success: false, message: 'Not Authorized. Login Again'});
      }

      next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default userAuth;