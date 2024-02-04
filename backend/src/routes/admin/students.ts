import express from 'express'
import { activeStudent, deactiveStudent, getAllStudents, getStudent, manageTribalTest } from '../../controllers/admin/students'

const admin_student_router = express.Router()

admin_student_router.post('students/tribal-test', manageTribalTest)

admin_student_router.patch('students/tribal-test', manageTribalTest)

admin_student_router.delete('students/tribal-test/question/:questionNumber', manageTribalTest)

admin_student_router.get('/students',getAllStudents)

admin_student_router.get('/students/student',getStudent)

admin_student_router.patch('/students/:studentId/deactivate',deactiveStudent)

admin_student_router.patch('/students/:studentId/activate',activeStudent)


export default admin_student_router