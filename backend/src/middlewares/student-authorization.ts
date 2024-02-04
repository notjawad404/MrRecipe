import express from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import UnauthenticatedError from '../errors/unauthenticated'
import InternalServerError from '../errors/internal-server-error'
import BadRequestError from '../errors/bad-request'
import Student from '../models/student'
import {Request, Response, NextFunction} from 'express'


export const student_authorization = async (req: Request, res: Response, next: 
    NextFunction) => {



    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Authorization invalid')
    }
    const token = authHeader.split(' ')[1];
    try {
        if (!process.env.JWT_SECRET) {
            throw new InternalServerError('JWT_SECRET must be set');
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload

        const user = await Student.findById(payload.userId).select('-password')
        if (!user) {
            throw new BadRequestError('User does not exist')
        }
        (req as any).user = user
        next()
    } catch (err) {
        throw new UnauthenticatedError('Authorization invalid')

    }

}