import express from 'express'
import { getUserProfile, loginUser, registerUser, UserLogOut } from '../controllers/auth.controller.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()



// TODO: Route
// TODO: Route

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/profile',protect, getUserProfile)
router.post('/logout',protect, UserLogOut)


export default router