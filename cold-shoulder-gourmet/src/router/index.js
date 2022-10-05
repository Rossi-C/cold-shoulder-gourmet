import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Admin from "../components/Admin";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";

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
    {
        path: "/gallery",
        element: <Gallery />
    },
    {
        path: "/contactUs",
        element: <ContactUs />
    },
]);