import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import "./App.css";

const url = process.env.PUBLIC_URL + "/img/bg.jpg";

const HeaderWrapper = styled.header`
  width: 100%;
  /* height: 49px; */
  background-color: #505050;
  opacity: 0.8;
`;

const MenuWrapper = styled.div`
  width: 100%;
  /* height: 89px; */
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
`;
const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>
      <MenuWrapper>
        <Container>
          <Menu />
        </Container>
      </MenuWrapper>
      <MainWrapper>
        <Container>
          <Main />
        </Container>
      </MainWrapper>
    </div>
  );
}

export default App;
