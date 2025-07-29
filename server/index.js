import express from 'express'
import 'dotenv/config'



const app = express()
const PORT = process.env.PORT


app.get('/', (req, res) => {
  res.send('server')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  console.log(`Client Url: ${process.env.CLIENT_URL} `);
  console.log(`Admin Url: ${process.env.ADMIN_URL} `);
  console.log(`API docs available at : http://localhost:${PORT}/api/docs `);
  
})

