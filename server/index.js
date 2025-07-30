import app from "./app.js"
import 'dotenv/config'



const PORT = process.env.PORT


// TODO: Starting Server setUP
// TODO: Starting Server setUP

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  console.log(`Client Url: ${process.env.CLIENT_URL} `);
  console.log(`Admin Url: ${process.env.ADMIN_URL} `);
  console.log(`API docs available at : http://localhost:${PORT}/api/docs `);
  
})

