import express from 'express'
import cors from 'cors'
import router from './routes/auth.routes.js'
import connectDB from './config/Database.js'

const app = express()

// TODO: Connect DataBase
// TODO: Connect DataBase
connectDB()



//TODO: Middle Ware
//TODO: Middle Ware

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())


// TODO: SHOW ROUTER FOR DISPLAY
// TODO: SHOW ROUTER FOR DISPLAY
app.use("/api/auth",router)


//TODO: HOME Route
//TODO: HOME Route
app.get('/', (req, res) => {
  res.send('server')
})


export default app