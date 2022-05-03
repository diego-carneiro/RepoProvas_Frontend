import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import Button from "../GlobalComponents/Button";
import { useEffect } from "react";

export default function TeachersScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/tests?groupBy=disciplines");
    promise.then(response => {
      setItems(response.data);
      console.log(items);
    });
  }, []);

  
  return (
    <Container>
      <h1>Adicione uma prova</h1>
      <Button buttonShape={"post"} />
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.form`
  width: 50%;
  min-height: 800px;
	padding: 30px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

  display: flex;
	flex-direction: column;

	h1{
		font-weight: 500;
		margin-bottom: 30px;
	}
`
const Input = styled.input`
	width: 100%;
	height: 56px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
	margin-bottom: 22px;
	padding: 8px;
`