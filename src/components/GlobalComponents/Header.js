import React from "react";
import styled from "styled-components";
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export default function Header({ headerVersion }) {
	const navigate = useNavigate();
	
	return (
		<>
			{headerVersion === "v1" &&
				<HeaderV1>
					<Repo>Repo</Repo>
					<Provas>Provas</Provas>
				</HeaderV1>
			}
			{headerVersion === "v2" &&
				<HeaderV2>
					<Repo>Repo</Repo>
					<IconContext.Provider value={{ color: "black", size: "34px" }}>
						<RiLogoutBoxRLine onClick={() => navigate("/")}/>
					</IconContext.Provider>
				</HeaderV2>
			}
		</>
	);
}
// ::::::::::Styled-Components::::::::::
const HeaderV1 = styled.div`
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
const HeaderV2 = styled.div`
  width: 100%;
  height: 160px;
	padding: 37px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`
