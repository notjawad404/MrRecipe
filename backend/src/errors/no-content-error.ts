import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";



class NoContentError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NO_CONTENT;
    Object.setPrototypeOf(this, NoContentError.prototype);
  }
}

export default NoContentError;
