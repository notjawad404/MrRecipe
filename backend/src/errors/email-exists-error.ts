import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";

class EmailExistsError extends Error {
  statusCode:number
    constructor(message: string) {
      super(message);
      this.statusCode = StatusCodes.CONFLICT;
      Object.setPrototypeOf(this, EmailExistsError.prototype);
    }
  }


export default EmailExistsError