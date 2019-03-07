import React from "react";
import { Table, Button } from "../components/design";
import FlightModel from "../models/FlightModel";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

class FlightTable extends React.Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    extendObservable(this, {
      data: []
    });

    this.columns = [
      {
        title: "MSN",
        key: "msn",
        dataIndex: "msn",
        fixed: "left",
        width: 100
      },
      {
        title: "Flight Number",
        key: "flight_number",
        dataIndex: "flight_number",
        fixed: "left",
        width: 100
      },
      {
        title: "Harness Length",
        key: "harness_length",
        dataIndex: "harness_length"
      },
      {
        title: "Gross Weight",
        key: "gross_weight",
        dataIndex: "gross_weight"
      },
      {
        title: "Atmospheric Pressure",
        key: "atmospheric_pressure",
        dataIndex: "atmospheric_pressure"
      },
      {
        title: "Room Temperature",
        key: "room_temperature",
        dataIndex: "room_temperature"
      },
      {
        title: "Airport",
        key: "airport",
        dataIndex: "airport"
      },
      {
        title: "Source",
        key: "source",
        dataIndex: "source"
      },
      {
        title: "Destination",
        key: "destination",
        dataIndex: "destination"
      },
      {
        title: "Left Wing Fuel Capacity",
        key: "left_wing_fuel_capacity",
        dataIndex: "left_wing_fuel_capacity"
      },
      {
        title: "Right Wing Fuel Capacity",
        key: "right_wing_fuel_capacity",
        dataIndex: "right_wing_fuel_capacity"
      },
      {
        title: "Left Wing Fuel Quantity",
        key: "left_wing_fuel_quantity",
        dataIndex: "left_wing_fuel_quantity"
      },
      {
        title: "Right Wing Fuel Quantity",
        key: "right_wing_fuel_quantity",
        dataIndex: "right_wing_fuel_quantity"
      },
      { title: "Max Altitude", key: "max_altitude", dataIndex: "max_altitude" }
    ];

    this.flights.getAll().then(
      res =>
        (this.data = res.data.map(e => {
          e.key = e._id;
          return e;
        }))
    );
  }

  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.data}
        scroll={{ x: 2200 }}
      />
    );
  }
}

export default observer(FlightTable);
