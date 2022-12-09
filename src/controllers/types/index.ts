/**
 * basic JSON response for controllers
 * 
 */
export type BasicResponse ={
    message: string
}
/**
 * error JSON response for controllers
 */
export type ErrorResponse = {
    error:string,
    message:string 
}