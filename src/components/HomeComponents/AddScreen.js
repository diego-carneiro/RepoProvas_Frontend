import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

import Button from "../GlobalComponents/Button";

export default function AddScreen() {
  const initialValue = {
    name: "",
    pdfUrl: "",
    categoryId: Number(""),
    teacherDisciplineId: Number(""),
  };
  
  const [input, setInput] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target

    setInput({ ...input, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const promise = axios.post("http://localhost:5000/test", input);
    promise.then(response => {
      console.log("Test Created");
    });
    promise.catch(error => alert(error));
  }
console.log(input);
  return (
    <Container onSubmit={onSubmit}>
      <h1>Adicione uma prova</h1>
      <Input placeholder="Nome da prova" type="text" name="name" onChange={onChange} />
      <Input placeholder="Link da prova" type="url" name="pdfUrl" onChange={onChange} />
      <Input placeholder="Categoria" type="text" name="categoryId" onChange={onChange} />
      <Input placeholder="Disciplina" type="text" name="teacherDisciplineId" onChange={onChange} />
      <Input placeholder="Pessoa instrutora" type="email" name="email" onChange={onChange} />
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