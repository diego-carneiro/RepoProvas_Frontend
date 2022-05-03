import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Button from "./Button";
import PageTitle from "./PageTitle";

export default function SignInSignUpBox({ boxContent }) {
  const storage = (key, value) => {
		localStorage.setItem(key, value);
	}
  
  const navigate = useNavigate();

  const signInInitialValue = {
    email: "",
    password: "",
  };
  const [signInInput, setSignInInput] = useState(signInInitialValue);

  const signUpInitialValue = {
    email: "",
    password: "",
    checkPassword: "",
  };
  const [signUpInput, setSignUpInput] = useState(signUpInitialValue);

  function onChange(ev) {
    const { name, value } = ev.target

    setSignInInput({ ...signInInput, [name]: value });
    setSignUpInput({ ...signUpInput, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const promise = axios.post("http://localhost:5000/sign-in", signInInput);
    promise.then(response => {
      console.log("Successful Login");
      storage("userToken", response.data.token);
      navigate("/home");
    });
    promise.catch(error => alert(error));
  }

  return (
    <Container onSubmit={onSubmit}>
      {boxContent === "loginBox" &&
        <>
          <PageTitle title={"login"} />
          <Button buttonShape={"github"} />
          <Input placeholder="Email" type="email" name="email" onChange={onChange} />
          <Input placeholder="Senha" type="password" name="password" onChange={onChange} />
          <Button buttonShape={"notRegistered"} />
          <Button buttonShape={"sign-in"} />
        </>
      }
      {boxContent === "registerBox" &&
        <>
          <PageTitle title={"cadastro"} />
          <Button buttonShape={"github"} />
          <Input placeholder="Email" type="email" name="email" onChange={onChange} />
          <Input placeholder="Senha" type="password" name="password" onChange={onChange} />
          <Input placeholder="Confirme sua senha" type="password" name="registerPasswordCheck" onChange={onChange} />
          <Button buttonShape={"alreadyRegistered"} />
          <Button buttonShape={"sign-up"} />
        </>
      }
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
const Input = styled.input`
	width: 464px;
	height: 56px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
	margin-bottom: 16px;
	padding: 8px;
`