import React from "react";
import { Form, Select, Input, InputNumber, Button } from "../components/design";
import FlightModel from "../models/FlightModel";

const { Option } = Select;

class FlightForm extends React.Component {
  rules = [
    {
      required: true,
      message: "cannot be blank"
    }
  ];

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let flight = new FlightModel();
        flight.create(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="MSN" hasFeedback>
          {getFieldDecorator("msn", {
            initialValue: "12345",
            rules: this.rules
          })(<Input disabled />)}
        </Form.Item>

        <Form.Item label="Harness Length">
          {getFieldDecorator("harness_length", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Gross Weight">
          {getFieldDecorator("gross_weight", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Atmospheric Pressure">
          {getFieldDecorator("atmospheric_pressure", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Room Temperature">
          {getFieldDecorator("room_temperature", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Airport">
          {getFieldDecorator("airport", {
            rules: this.rules
          })(
            <Select defaultActiveFirstOption={true}>
              <Option key="bangalore">Bangalore</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item label="Fuel Capacity on Left Wing">
          {getFieldDecorator("left_wing_fuel_capacity", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Fuel Capacity on Right Wing">
          {getFieldDecorator("right_wing_fuel_capacity", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Fuel Quantity on Left Wing">
          {getFieldDecorator("left_wing_fuel_quantity", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Fuel Quantity on Right Wing">
          {getFieldDecorator("right_wing_fuel_quantity", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Maximum Altitude to be reached">
          {getFieldDecorator("max_altitude", {
            rules: this.rules
          })(<InputNumber />)}
        </Form.Item>

        <Form.Item label="Flight Number">
          {getFieldDecorator("flight_number", {
            rules: this.rules
          })(<Input />)}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Add Flight
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: "validate_other" })(FlightForm);

export default WrappedDemo;
