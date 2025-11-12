import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import op from './routes/response.routes.js';
dotenv.config();
const app = express();

// Show HTTP movements
app.use(morgan('dev'));

//Hi Home
app.get("/", (Req,res)=>{
    res.send("Hola mundo desde Home")
})

// Main route
app.use("/calculate", op);


const port = process.env.PORT || 1010;

app.listen(port, ()=>console.log(`server running in: http://localhost:${port}`));