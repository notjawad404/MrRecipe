import jwt from 'jsonwebtoken'
import { IStudent } from '../models/student';

const generateJWT = async (student:IStudent): Promise<string> => {
    const token = jwt.sign(
      { userId: student._id, name: student.name },
      process.env.JWT_SECRET, 
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );
  
    return token;
  };


  export default generateJWT