import User from "../model/userModel.js"
import generateToken from "../utils/generateToken.js"


const registerUser = async (req, res)=>{
    const {name, email, password, role} = req.body
    
    const user = await User.create({
        name, 
        email, 
        password, 
        role, 
        address:[], 
    })
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            address: user.address,
        })
    }
    else{
        res.status(404)
        throw new Error("Invalid user Data")
    }
}

const loginUser = async (req, res)=>{
    const {email, password} = await req.body
    const user  = await User.findOne({email})
    if(user && user.matchPassword(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            address: user.address || [],
            token: generateToken(user._id)
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password")
    }

}

const getUserProfile = async (req, res) =>{
    const user = await User.findById(req.body._id);
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            address: user.address || [],
            
        })
    }else{
        console.log("user not found for this id");
        res.status(404);
        throw new Error("user not found")
    }
}

const UserLogOut = async (req, res) =>{

}

export {loginUser, registerUser, getUserProfile, UserLogOut}