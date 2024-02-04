import express from 'express';
import { Request, Response } from 'express';
import { connectDB } from './config/db/connect';
import student_auth_router from './routes/student/student-auth'
import dotenv from 'dotenv';
import admin_course_router from './routes/admin/course';
import student_router from './routes/student/student';
import student_course_router from './routes/student/course';
import student_event_router from './routes/student/event';
import student_interview_journey_router from './routes/student/interview-journey';
import student_product_router from './routes/student/products';
import student_session_router from './routes/student/session';
import admin_student_router from './routes/admin/students';
import admin_products_router from './routes/admin/products';
import admin_event_router from './routes/admin/event';
import admin_session_router from './routes/admin/session';
import admin_instructor_router from './routes/admin/instructor';
import errorHandlerMiddleware from './middlewares/error-handler';
import { student_authorization } from './middlewares/student-authorization';
dotenv.config();

//TODO: IMPLEMENT PAYMENT GATEWAY
//TODO: IMPLEMENT TRANSACTIONS WHERE NEEDED -> MOST IMPORTANT 
//TODO: SEPARATE REVIEW PART FROM COURSE SCHEMA AND USE ITS REF ONLY
//TODO: MAKE CHANGES TO ASSIGNMENT AS IT SHOULDNT HAVE A SCHEMA AND BE FETCHED DIRECTLY FROM CLOUD STORAGE
const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to MEDOLOGY!');
});

app.use('/api/v1/students/auth',student_auth_router)
// app.use('/api/v1/students', student_authorization ,student_router)
app.use('/api/v1/students' ,student_router)
//TODO: add student authorization to these later when testing is done
app.use('/api/v1/courses',student_course_router)
app.use('/api/v1/events',student_event_router)
app.use('/api/v1/sessions',student_session_router)
app.use('/api/v1/interview-journey',student_interview_journey_router)
app.use('/api/v1/products',student_product_router)
//TODO: add admin authorization too
app.use('/api/v1/admin',admin_course_router,admin_student_router,admin_event_router,admin_session_router,admin_products_router,admin_instructor_router)
app.use(errorHandlerMiddleware)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();