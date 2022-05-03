import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/auth";

import Button from "../GlobalComponents/Button";
import { useEffect } from "react";

export default function TeachersScreen() {
  const [items, setItems] = useState([]);
  const { token } = React.useContext(AuthContext);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/tests?groupBy=teachers",
      {
        headers: {
          "Authorization": token
        }
      });
    promise.then(response => {
      setItems(response.data.tests);

    });
  }, []);

  return (
    <Container>
      {items.map(info => (
        <TeacherBox>
          <h1>{info.teacher.name}</h1>
          <TestBox>
            {info.tests.map(data => (
              <>
                <h2>{data.category.name}</h2>
                <h3>{data.name}</h3>
              </>
            ))}
          </TestBox>
        </TeacherBox>
      ))}
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 50%;
  min-height: 800px;
	padding: 30px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

  display: flex;
	flex-direction: column;

	h1{
		font-weight: 500;
		margin-bottom: 15px;
	}
`
const TeacherBox = styled.div`
  width: 100%;
  margin-bottom: 30px;

  h2{
    font-size: 22px;
    font-weight: 700;
  }
`
const TestBox = styled.div`
  width: 100%;
  padding-left: 20px;

  h2{
    font-size: 18px;
  }
  h3{
    font-size: 14px;
    margin-bottom: 16px;
  }
`

