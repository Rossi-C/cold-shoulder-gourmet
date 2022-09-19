import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";

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
]);