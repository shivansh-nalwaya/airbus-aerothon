import React from "react";
import { Table } from "antd";
import FlightModel from "../models/FlightModel";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

class FlightTable extends React.Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    this.columns = [
      {
        title: "Flight Number",
        dataIndex: "flight_number",
        fixed: "left",
        width: 100
      },
      { title: "MSN", dataIndex: "msn", fixed: "left", width: 100 },
      { title: "Harness Length", dataIndex: "harness_length" },
      { title: "Gross Weight", dataIndex: "gross_weight" },
      { title: "Atmospheric Pressure", dataIndex: "atmospheric_pressure" },
      { title: "Room Temperature", dataIndex: "room_temperature" },
      { title: "Airport", dataIndex: "airport" },
      { title: "Source", dataIndex: "source" },
      { title: "Destination", dataIndex: "destination" },
      {
        title: "Left Wing Fuel Capacity",
        dataIndex: "left_wing_fuel_capacity"
      },
      {
        title: "Right Wing Fuel Capacity",
        dataIndex: "right_wing_fuel_capacity"
      },
      {
        title: "Left Wing Fuel Quantity",
        dataIndex: "left_wing_fuel_quantity"
      },
      {
        title: "Right Wing Fuel Quantity",
        dataIndex: "right_wing_fuel_quantity"
      },
      { title: "Max Altitude", dataIndex: "max_altitude" }
    ];
    extendObservable(this, { data: [] });
    this.flights.getAll().then(res => (this.data = res.data));
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
