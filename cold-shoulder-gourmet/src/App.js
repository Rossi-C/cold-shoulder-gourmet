import {router} from "./router";
import {
  RouterProvider,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";
import {useEffect} from "react";
import WebFont from "webfontloader";


function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Allerta Stencil', "Cedarville Cursive", "Nanum Gothic", "Heebo", "Stardos Stencil"]
            }
        });
    }, []);
  return (
    <Container className="bg-dark px-0 py-2 m-0" style={{minHeight: "100vh", fontFamily:"Stardos Stencil"}} fluid>
      <Navigation/>
      <div className="text-light">
        <RouterProvider router={router}/>
      </div>
    </Container>
  );
}

export default App;
