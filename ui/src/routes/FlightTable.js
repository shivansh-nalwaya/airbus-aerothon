import React from "react";
import { Link } from "react-router-dom";
import { Table, Layout, Button, Input, Icon } from "../components/design";
import FlightModel from "../models/FlightModel";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

const Content = Layout.Content;

class FlightTable extends React.Component {
  constructor(props) {
    super(props);
    this.flights = new FlightModel();
    extendObservable(this, {
      data: []
    });

    this.flights.getAll().then(
      res =>
        (this.data = res.data.map(e => {
          e.key = e._id;
          return e;
        }))
    );
  }

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
  });

  render() {
    const columns = [
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
        width: 100,
        ...this.getColumnSearchProps("flight_number"),
        render: (text, row) => <Link to={`/flights/${row._id}`}>{text}</Link>
      },
      {
        title: "Harness Length",
        key: "harness_length",
        dataIndex: "harness_length",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Gross Weight",
        key: "gross_weight",
        dataIndex: "gross_weight",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Atmospheric Pressure",
        key: "atmospheric_pressure",
        dataIndex: "atmospheric_pressure",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Room Temperature",
        key: "room_temperature",
        dataIndex: "room_temperature",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Airport",
        key: "airport",
        dataIndex: "airport"
      },
      {
        title: "Left Wing Fuel Capacity",
        key: "left_wing_fuel_capacity",
        dataIndex: "left_wing_fuel_capacity",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Right Wing Fuel Capacity",
        key: "right_wing_fuel_capacity",
        dataIndex: "right_wing_fuel_capacity",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Left Wing Fuel Quantity",
        key: "left_wing_fuel_quantity",
        dataIndex: "left_wing_fuel_quantity",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Right Wing Fuel Quantity",
        key: "right_wing_fuel_quantity",
        dataIndex: "right_wing_fuel_quantity",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      },
      {
        title: "Max Altitude",
        key: "max_altitude",
        dataIndex: "max_altitude",
        sorter: (a, b) => a.harness_length - b.harness_length,
        sortDirections: ["ascend", "descend"]
      }
    ];

    return (
      <Content style={{ backgroundColor: "#f2f2f2", height: "88vh" }}>
        <Table columns={columns} dataSource={this.data} scroll={{ x: 2200 }} />
      </Content>
    );
  }
}

export default observer(FlightTable);
