import styled from "styled-components";

import Button from "../GlobalComponents/Button";
import Splitter from "../GlobalComponents/Splitter";

export default function LoginBox() {
	return (
		<Container>
			<h1>Login</h1>
			<Button />
			<Splitter />
			<Input></Input>
		</Container>
	);
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1{
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 30px;
	}
`
const Input = styled.input`
	width: 464px;
	height: 56px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
`