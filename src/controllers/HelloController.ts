import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSucccess } from "@/utils/logger";

export class HelloController implements IHelloController {
    public async getMessage(name?: string | undefined): Promise<BasicResponse> {
       
        LogSucccess('[/api/hello] Get request');
        return {
            message: `Hello ${name || 'world'} `
        }

    }    
}