import {router} from "./router";
import {
  RouterProvider,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import {Container} from "react-bootstrap";
import {useEffect} from "react";
import WebFont from "webfontloader";
import {AiFillInstagram} from "react-icons/ai";


function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Allerta Stencil', "Cedarville Cursive", "Nanum Gothic", "Heebo", "Stardos Stencil", "Oswald"]
            }
        });
    }, []);
  return (
    <Container className="bg-black px-0 py-2 m-0" style={{minHeight: "100vh", fontFamily:"Oswald"}} fluid>
      <Navigation/>
      <div className="text-light">
        <RouterProvider router={router}/>
      </div>
        <div>
            <hr className={'text-light'} />
            <div className={'m-auto text-center text-light'}>
                <h1>COLD SHOULDER GOURMET</h1>
                <p>craigedmunds@coldshouldergourmet.com</p>
                <p>+1 (843) 642 4680</p>
                <p>1684 Old Towne Rd Charleston, SC</p>
                <p>
                    <a className={"link-light"} href="https://www.instagram.com/coldshouldergourmet/">
                        <AiFillInstagram style={{fontSize: 30}}/>
                    </a>
                </p>
            </div>
        </div>
    </Container>
  );
}

export default App;
