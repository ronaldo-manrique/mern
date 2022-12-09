import express , { Request, Response } from 'express';
import { HelloController } from '../controllers/HelloController';
import { LogInfo } from '../utils/logger';

//Router from express
 let helloRouter = express.Router();
//http://localhost:8000/api/hello?name=nartin/
 helloRouter.route('/')
 .get(async (req:Request, res:Response) => {
    let name:any = req?.query?.name;
    LogInfo(`query param ${name}`)    
    //controller instance to excute method 
    const controller = new HelloController();
    //obtain response
    const response = await controller.getMessage(name);
    // send to  the client response
    return res.send(response);
 })

 // export helloRout
 export default helloRouter;