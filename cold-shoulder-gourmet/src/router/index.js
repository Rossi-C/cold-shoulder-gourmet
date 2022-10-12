import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Admin from "../components/Admin";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import Producers from "../components/Producers";
import MeetTheTeam from "../components/MeetTheTeam";
import Services from "../components/Services";
import Policies from "../components/Policies";

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
    {
        path: "/producers",
        element: <Producers />
    },
    {
        path: "/team",
        element: <MeetTheTeam />
    },
    {
        path: "/services",
        element: <Services />
    },
    {
        path: "/policies",
        element: <Policies />
    },
]);
