import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";
import Admin from "../components/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/aboutUs",
        element: <AboutUs />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/admin",
        element: <Admin />
    },
]);