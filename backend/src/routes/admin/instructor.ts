import express from 'express'
import { addNewInstructor, getAllInstructors, getInstructor } from '../../controllers/admin/instructor';

const admin_instructor_router = express.Router();


admin_instructor_router.get('/instructors', getAllInstructors)

admin_instructor_router.get('/instructors/instructor', getInstructor)

admin_instructor_router.post('/instructors/add', addNewInstructor) 


export default admin_instructor_router