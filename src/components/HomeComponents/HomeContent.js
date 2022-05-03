import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AuthContext } from "../../providers/auth";


import Button from "../GlobalComponents/Button";
import AddScreen from "./AddScreen";
import DisciplineScreen from "./DisciplineScreen";
import TeachersScreen from "./TeachersScreen";

export default function HomeContent() {
  const { screenSwitch, setScreenSwitch } = React.useContext(AuthContext);
  const { token } = React.useContext(AuthContext);
  const storage = (key, value) => {
    localStorage.setItem(key, value);
  }

  return (
    <>
      <Container>
        <ButtonLayer>
          <Button buttonShape={"disciplinas"} />
          <Button buttonShape={"instrutor"} />
          <Button buttonShape={"adicionar"} />
        </ButtonLayer>
        {screenSwitch === "disciplinas" && <DisciplineScreen />}
        {screenSwitch === "instrutor" && <TeachersScreen />}
        {screenSwitch === "adicionar" && <AddScreen />}
      </Container>
    </>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.form`
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const ButtonLayer = styled.div`
    width: 50%;
    height: 122px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`