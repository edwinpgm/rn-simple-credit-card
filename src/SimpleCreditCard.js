import React, { Component } from "react";
import {
  Text,
  View,
} from "react-native";

import CCInput from "../components/CCInput";
import Col from "../components/Col";
import Row from "../components/Row";


class SimpleCreditCard extends Component {
  render() {
    return (
      <View>
        <Row>
          <Col>
            <CCInput
              label="Card number"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <CCInput
              label="Exp date"
            />
          </Col>
          <Col>
            <CCInput
              label="CVV"
            />
          </Col>
        </Row>
      </View>
    )
  }
}

export default SimpleCreditCard;