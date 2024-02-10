import { BrowserRouter, Route } from "react-router-dom";
import Favourites from "../Favourites";
import UserProfile from "../auth/UserProfile";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Details from "../Details";
import Home from "../Home";


export default function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </BrowserRouter>
  )
}
