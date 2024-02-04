import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

interface CustomError {
  statusCode: number;
  message: string;
}

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<CustomError> => {
  let customError: CustomError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong, try again later',
  };

  if (err.name === 'ValidationError') {
    customError.message = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(',');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${
      Object.keys(err.keyValue)[0]
    } field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === 'CastError') {
    customError.message = `No item found with id: ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }
  if (err.name === 'UnauthorizedError') {
    customError.message = "Unauthorized access. Please log in.";
    customError.statusCode = StatusCodes.UNAUTHORIZED;
}
if (err.name ===  'EmailExistsError') {
  // Return a 409 Conflict response with a custom message
  return res.status(409).json({ success: false, message: err.message });
}

// Catch-all for other types of errors
if (!customError.message) {
    customError.message = 'An unexpected error occurred.';
}

  return res.status(customError.statusCode).json({success:false, message: customError.message });
};

export default errorHandlerMiddleware;
