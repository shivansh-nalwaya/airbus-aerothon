import React, { Component } from "react";
import { Layout } from "../components/design";
import { observer } from "mobx-react";
import FlightModel from "../models/FlightModel";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    this.flights.getAll();
  }

  render() {
    return <Content style={{ padding: "0 50px" }}>Content</Content>;
  }
}

export default observer(Home);
