import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/auth";


import Button from "../GlobalComponents/Button";

export default function AddScreen() {
  const initialValue = {
    name: "",
    pdfUrl: "",
    categoryId: Number(""),
    teacherDisciplineId: Number(""),
  };
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [disciplines, setDisciplines] = useState([]);
  const [showDisciplines, setShowDisciplines] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState("");

  const [input, setInput] = useState(initialValue);
  const { token } = React.useContext(AuthContext);

  function onChange(ev) {
    const { name, value } = ev.target

    setInput({ ...input, [name]: value });
  }
  console.log(selectedCategory);
  function onSubmit(ev) {
    ev.preventDefault();

    const promise = axios.post("http://localhost:5000/test", input);
    promise.then(response => {
      console.log("Test Created");
    });
    promise.catch(error => alert(error));
  }

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/categories",
      {
        headers: {
          "Authorization": token
        }
      });
    promise.then(response => {
      setCategories(response.data.categories);
    });

    const promise2 = axios.get("http://localhost:5000/disciplines",
      {
        headers: {
          "Authorization": token
        }
      });
    promise2.then(response => {
      setDisciplines(response.data.disciplines);
    });
  }, []);

  function handlerClicker() {
    setShowCategories(!showCategories);
  }

  return (
    <Container onSubmit={onSubmit} >
      <h1>Adicione uma prova</h1>
      <Input placeholder="Nome da prova" type="text" name="name" onChange={onChange} />
      <Input placeholder="Link da prova" type="url" name="pdfUrl" onChange={onChange} />
      <SelectBox onClick={handlerClicker}>
        <h2>Categorias</h2>
      </SelectBox>
      {showCategories ?
        <OptionsBox>
          {categories.map(info => (
            <OptionsButton onClick={() => {
              setSelectedCategory(info.id);
              setShowCategories(!showCategories);
            }}>{info.name}
            </OptionsButton>
          ))}
        </OptionsBox>
        : <></>
      }
      <SelectBox onClick={handlerClicker}>
        <h2>Disciplina</h2>
      </SelectBox>
      {showCategories ?
        <OptionsBox>
          {disciplines.map(info => (
            <OptionsButton onClick={() => {
              setSelectedCategory(info.id);
              setShowCategories(!showCategories);
            }}>{info.name}
            </OptionsButton>
          ))}
        </OptionsBox>
        : <></>
      }

      <SelectBox>
        <h2>Pessoa instrutora</h2>
      </SelectBox>
      <Button buttonShape={"post"} />
    </Container >
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.form`
  width: 50%;

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
const SelectBox = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.23);
	margin-bottom: 22px;
  border-radius: 4px;
  padding: 8px;

  display: flex;
  align-items: center;

  h2{
    font-size: 18px;
  }
`
const OptionsBox = styled.div`
  width: 100%;
  margin-bottom: 22px;
`
const OptionsButton = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 8px;
  margin-bottom: 5px;

  h3{
    font-size: 14px;
  }
`