import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
`;

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
  }
`;
const Calls = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
  }
`;

const CallButton = styled.button`
  width: 176px;
  height: 48px;
  background-color: #3fc7db;
  border-radius: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

export default class Menu extends Component {
  render() {
    return (
      <Row>
        <Col lg={3}>
          <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
        </Col>
        <Col  lg={{span: 3, offset: 2}}  >
          <WorkTime>
            Пн-пт с 10 до 20, сб,вс с 11 до 18
            <span>Ленинская, 301</span>
          </WorkTime>
        </Col>
        <Col lg={3}>
          <Calls>
            Звонки принимаются 24 часа
            <span>8 (846) 922 55 44</span>
          </Calls>
        </Col>
        <Col lg={2}>
          <CallButton>Заказать звонок</CallButton>
        </Col>
      </Row>
    );
  }
}
