import React from "react";
import styled from "styled-components";

export default function Header() {
	return (
		<Container>
			<Repo>Repo</Repo>
			<Provas>Provas</Provas>
		</Container>
	);
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  height: 100px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`
const Repo = styled.h1`
  font-size: 36px;
	font-weight: 700;
  font-family: 'Lexend', sans-serif;
`
const Provas = styled.h1`
  font-size: 36px;
	font-weight: 700;
  font-family: 'Lexend', sans-serif;	
	color: #3F61D7;
`