import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from "./router";
import {
  RouterProvider,
} from "react-router-dom";

import Navigation from './components/Navbar';



function App() {

  return (
    <>
      <Navigation />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
