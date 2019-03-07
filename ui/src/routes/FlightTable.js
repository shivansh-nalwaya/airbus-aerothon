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
        dataIndex: "flight_number"
      }
    ];
    extendObservable(this, { data: [] });
    this.flights.getAll().then(res => (this.data = res.data));
  }
  render() {
    return <Table columns={this.columns} dataSource={this.data} />;
  }
}

export default observer(FlightTable);
