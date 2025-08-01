import jwt from 'jsonwebtoken'
import User from '../model/userModel.js'

const protect = async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from token, exclude password
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log("Bearer token error:", error.message)
      res.status(401).json({ message: "Not authorized, token failed" })
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' })
  }
}

export { protect }
