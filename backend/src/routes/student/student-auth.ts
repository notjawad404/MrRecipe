import express from 'express'
import {  registerStudent,  loginStudent, forgetPasswordStudent,resetPasswordStudent,verifyCode } from '../../controllers/student/student-auth'

const student_auth_router = express.Router()

//Register APIs --> These APIs register users in thier respective document and also send them a welcome email along with verification code.
student_auth_router.post('/register', registerStudent)

//Login APIs
student_auth_router.post('/login', loginStudent)

//Verify email APIs --> These APIs verify if the code user sent and code sent by us on user's mail match.
student_auth_router.post('/verify-code', verifyCode)

//Forget Password APIs --> These APIs sends verification code on user's email.
student_auth_router.post('/forget-password', forgetPasswordStudent)

// Reset Password APIs --> 
student_auth_router.post('reset-password',resetPasswordStudent)

export default student_auth_router
 