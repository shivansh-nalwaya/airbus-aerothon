import React, { Component } from "react";
import { Layout } from "../components/design";
import { observer } from "mobx-react";
import FlightModel from "../models/FlightModel";
import Background from "../images/background.jpg";
import { Box, BoxText } from "../styles/HomeStyles";

const { Content } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    this.flights.getAll();
  }

  render() {
    return (
      <Content
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          height: "88vh"
        }}
      >
        <Box>
          <BoxText>Own the sky.</BoxText>
        </Box>
      </Content>
    );
  }
}

export default observer(Home);
