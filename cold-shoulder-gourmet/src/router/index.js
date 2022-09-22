import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/menu",
        element: <Menu />
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