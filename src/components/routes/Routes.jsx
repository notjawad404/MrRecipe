import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Favourites from "../Favourites";
import Details from "../Details";
import Home from "../Home";
import NotFoundPage from "../NotFoundPage";
import App from "../../App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/details" element={<Details/>} />
            {/* <Route path="/favourites" element={<Favourites/>} /> */}
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
