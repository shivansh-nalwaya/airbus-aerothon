import React, { Component } from "react";
import { Layout } from "../components/design";
import { observer } from "mobx-react";
import FlightModel from "../models/FlightModel";
import { BoxText } from "../styles/HomeStyles";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    this.flights.getAll();
  }

  render() {
    return (
      <Content>
        <BoxText>Own the sky.</BoxText>
      </Content>
    );
  }
}

export default observer(Home);
