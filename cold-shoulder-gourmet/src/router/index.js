import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";

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
]);