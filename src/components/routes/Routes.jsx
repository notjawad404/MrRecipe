import { BrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Favourites from "../Favourites";
import UserProfile from "../auth/UserProfile";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Details from "../Details";
import Home from "../Home";
// import NotFoundPage from "../NotFoundPage";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../../App";

const router = BrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <ProtectedRoutes>
        <Route path="/favourites" element={<Favourites />} />
      </ProtectedRoutes>

        <Route path="*" element={<h1>ABCS</h1>} />
        </Route>
    
    )
)

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
