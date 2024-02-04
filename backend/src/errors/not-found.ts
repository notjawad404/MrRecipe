import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";


class NotFoundError extends CustomError {
  statusCode:number
  constructor(message:string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
    Object.setPrototypeOf(this,NotFoundError.prototype)
  }
}
 export default NotFoundError