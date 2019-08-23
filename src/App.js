import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/index";

function App() {
  return (
    <div>
      <Router>
        <Nav logo="Formik Example" register="Reister" />
        <div className="container">
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
