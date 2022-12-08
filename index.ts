import express, {Express, Request , Response } from 'express';
import dotenv from "dotenv";


// configuracion del archivo .env 
dotenv.config();

// crear  express APP
const app:Express = express();
const port: string | number  = process.env.PORT || 8000;

// definir la primera ruta
app.get('/',(req:Request, res:Response) => {
    res.send('APP con express + TS + swageer + mogoose +jest + nodemon......')
 })

// definir la primera ruta
app.get('/hello',(req:Request, res:Response) => {

  if(req.query.name === ''){
   res.json({  
      "data": {
        "message": "hola anonimo"
      }
    })
  }else{
   res.json({  
      "data": {
        "message": `Hola ${req.query.name}`
      }
    })
  }
   
})

app.get('/data',(req:Request, res:Response) => {
   res.status(200);
   res.json({  
      "data": {
        "message": "Goodbye, world"
      }
    }
    );
})


app.listen(port,()=>{
    console.log(`EXPREES SERVER RUNNING AT http://localhost:${port}`)
})