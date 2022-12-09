import dotenv from "dotenv";
import server from "./src/server";
import { LogError, LogSucccess } from "./src/utils/logger";



// *configuracion del archivo .env 
dotenv.config();

const port: string | number  = process.env.PORT || 8000;

//* ejecutar el servidor
server.listen(port,()=>{
  LogSucccess(`[SEVER ON]: running in http://localhost:${port}/api`);
})

//* controlar ERROR EN EL SERVERR
server.on('error',(error)=>{
  LogError(`[SEVER OFF]:  ${error}`)
})