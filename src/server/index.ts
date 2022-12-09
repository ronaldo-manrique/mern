import express, {Express, Request , Response } from 'express';
//enviroment variables


//security
import cors from "cors";
import helmet from 'helmet';

//TODO: HTTPS

//*root router 
import rootRuter from '../routes';



//* crear  express APP
const server:Express = express();


// *definir SERVER y use el "/api" y use el rootrouter desde 'index.ts' en routes
 server.use('/api',rootRuter)

//TODO: mongo conection 

//*Security config
server.use(helmet());
server.use(cors());

//content type 
server.use(express.urlencoded({extended: true, limit:'50mb'}));
server.use(express.json({limit:'50mb'}));

//*redirecciones config 
// http://localhost:8080/ ----> http://localhost:8080/api
server.get('/',(req:Request, res:Response) => {
    res.redirect('/api/');
});
export default server;

