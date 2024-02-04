import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";

class InternalServerError extends CustomError {
  statusCode:number;
  constructor(message:string) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

export default InternalServerError;