/**
*root router 
*redirections to routers  
*/

import express , { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '@/utils/logger';

// server instance
let server = express();
//router instance

let rootRouter = express.Router();

// active for requests to http://localhost:8080/api/
rootRouter.get('/',(req:Request, res:Response) => {
    LogInfo(' GET: http://localhost:8080')
    // send hello word 
    res.send('APP con express + TS + swageer + mogoose +jest + nodemon......')
 })
 // redirections to  rooRouter & controllers
 server.use('/',rootRouter);//http://localhost:8080/api
 server.use('/hello',helloRouter);//http://localhost:8080/api/hello
//add more router to the app

export default server;
