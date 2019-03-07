import React from "react";
import Home from "./routes/Home";
import AddFlight from "./routes/AddFlight";
import FlightTable from "./routes/FlightTable";
import ShowFlight from "./routes/ShowFlight";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/add/" component={AddFlight} />
        <Route exact path="/flights" component={FlightTable} />
        <Route path="/flights/:id" component={ShowFlight} />
      </div>
    </Router>
  );
};

export default App;
