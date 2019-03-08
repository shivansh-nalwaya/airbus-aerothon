import React from "react";
import Home from "./routes/Home";
import AddFlight from "./routes/AddFlight";
import FlightTable from "./routes/FlightTable";
import ShowFlight from "./routes/ShowFlight";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Background from "./images/background.jpg";

const App = () => {
  return (
    <Router basename={`/airbus-aerothon`}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
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
