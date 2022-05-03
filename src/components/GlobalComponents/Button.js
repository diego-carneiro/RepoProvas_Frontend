import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth";

export default function Button({ buttonShape }) {
  const navigate = useNavigate();
  const { setLoginTrigger, setScreenSwitch } = React.useContext(AuthContext);

  return (
    <>
      {buttonShape === "github" && <Github>ENTRAR COM O GITHUB</Github>}
      {buttonShape === "sign-in" && <SignInSingUp onClick={() =>
        setLoginTrigger(true)}>ENTRAR</SignInSingUp>}
      {buttonShape === "sign-up" && <SignInSingUp >CADASTRAR</SignInSingUp>}
      {buttonShape === "notRegistered" && <RegisterButton onClick={() => navigate("/sign-up")}>Não possuo cadastro</RegisterButton>}
      {buttonShape === "alreadyRegistered" && <RegisterButton onClick={() => navigate("/")}>Já possuo cadastro</RegisterButton>}
      {buttonShape === "disciplinas" && <HomeButton onClick={() => setScreenSwitch("disciplinas")}>DISCIPLINAS</HomeButton>}
      {buttonShape === "instrutor" && <HomeButton onClick={() => setScreenSwitch("instrutor")}>PESSOA INSTRUTORA</HomeButton>}
      {buttonShape === "adicionar" && <HomeButton onClick={() => setScreenSwitch("adicionar")}>ADICIONAR</HomeButton>}
      {buttonShape === "post" && <PostTest onClick={() =>
        setLoginTrigger(true)}>ENVIAR</PostTest>}
    </>
  );
}
// ::::::::::Styled-Components::::::::::
const Github = styled.button`
  width: 464px;
  height: 36px;
  background-color: #424445;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: #FFF;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
const SignInSingUp = styled.button`
  width: 464px;
  height: 36px;
  background-color: #1976D2;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: #FFF;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterButton = styled.button`
  width: 464px;
  height: 36px;
  font-size: 16px;
  font-weight: 500;
  color: #4673CA;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
const HomeButton = styled.div`
  width: 180px;
  height: 36px;
  border-radius: 4px;
  background-color: #1976D2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: #FFF;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`
const PostTest = styled.button`
  width: 100%;
  height: 36px;
  background-color: #1976D2;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: #FFF;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`
