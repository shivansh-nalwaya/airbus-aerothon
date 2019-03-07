import React from "react";
import { Col, Row, Layout } from "../components/design";
import FlightModel from "../models/FlightModel";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

const Content = Layout.Content;

class FlightTable extends React.Component {
  constructor(props) {
    super(props);
    let model = new FlightModel();
    extendObservable(this, {
      flight: {}
    });

    model.find(props.match.params.id).then(res => {
      this.flight = res.result;
    });
  }

  render() {
    return (
      <Content style={{ backgroundColor: "#f2f2f2", height: "88vh" }}>
        <Row type="flex" justify="space-around">
          <Col span={4}>MSN</Col>
          <Col span={12}>{this.flight.msn}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Flight Number</Col>
          <Col span={12}>{this.flight.flight_number}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Harness Length</Col>
          <Col span={12}>{this.flight.harness_length}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Gross Weight</Col>
          <Col span={12}>{this.flight.gross_weight}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Atmospheric Pressure</Col>
          <Col span={12}>{this.flight.atmospheric_pressure}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Room Temperature</Col>
          <Col span={12}>{this.flight.room_temperature}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Airport</Col>
          <Col span={12}>{this.flight.airport}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Source</Col>
          <Col span={12}>{this.flight.source}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Destination</Col>
          <Col span={12}>{this.flight.destination}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Left Wing Fuel Capacity</Col>
          <Col span={12}>{this.flight.left_wing_fuel_capacity}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Right Wing Fuel Capacity</Col>
          <Col span={12}>{this.flight.right_wing_fuel_capacity}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Left Wing Fuel Quantity</Col>
          <Col span={12}>{this.flight.left_wing_fuel_quantity}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Right Wing Fuel Quantity</Col>
          <Col span={12}>{this.flight.right_wing_fuel_quantity}</Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={4}>Max Altitude</Col>
          <Col span={12}>{this.flight.max_altitude}</Col>
        </Row>
      </Content>
    );
  }
}

export default observer(FlightTable);
