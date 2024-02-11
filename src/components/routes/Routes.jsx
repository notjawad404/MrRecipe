import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Favourites from "../Favourites";
import UserProfile from "../auth/UserProfile";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Details from "../Details";
import Home from "../Home";
import NotFoundPage from "../NotFoundPage";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../../App";

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="/favourites" element={<Favourites/>} />
        </Route>

        <Route path="*" element={<NotFoundPage/>} />
        </Route>
    
    )
)

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
