import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router";
import Home from './src/Home';
import About from './src/About';
import Contact from './src/Contact';
import Details from './src/Details';
import Zero from "./src/zero";
import Hello from "./src/hello";
import Hi from "./src/hi";
import  Github from "./src/Github";


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>|{" "}
        <Link to="/details">Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* nested routing */}
        <Route path="/details" element={<Details/>}>
              <Route index element={<Zero/>}></Route>
              <Route path="Hello" element={<Hello/>}></Route>
               <Route path="Hi" element={<Hi/>}></Route>
         </Route>

<Route path="/Github/:name" element={<Github/>}></Route>

      </Routes>


      {/* footer section will be same every time  */}
    </BrowserRouter>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
   