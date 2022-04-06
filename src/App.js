import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import PizzaForm from "./Comps/PizzaForm";
import img from "./Assets/Pizza.jpg";

const App = () => {
  return (
    <Router>
      <div className="header">
        <h1>Lambda Eats</h1>
        <Link to="/"><a>home</a></Link>
        <a>help</a>
      </div>
      <Route exact path="/">
      <div className="titleCard">
        <img src={img}/>
        <h2>Pizza while you code? I think yes!</h2>
        <Link to="/pizza" id="order-pizza">
          Pizza?
        </Link>
      </div>
      </Route>
      <Route exact path="/pizza">
      <PizzaForm />
      </Route>
    </Router>
  );
};

export default App;
