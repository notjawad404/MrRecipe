import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";

class TimeslotExistsError extends Error {
  statusCode:number
    constructor(message: string) {
      super(message);
      this.statusCode = StatusCodes.CONFLICT;
      Object.setPrototypeOf(this, TimeslotExistsError.prototype);
    }
  }


export default TimeslotExistsError