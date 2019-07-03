import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Slider from "./Slider";

const Repair = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  span {
    font-size: 24px;
    color: #ffffff;
    display: block;
  }
`;

const LightText = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  padding-top: 54px;
`;

const CallBtn = styled.button`
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  border-radius: 30px;
  color: #ffffff;
  margin-top: 32px;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди, и получите
            защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
          </LightText>
          <CallBtn>Отправить заявку!</CallBtn>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Slider />
        </Col>
      </Row>
    );
  }
}
