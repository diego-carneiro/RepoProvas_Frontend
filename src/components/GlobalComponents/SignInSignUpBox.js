import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import PageTitle from "./PageTitle";

export default function SignInSignUpBox({ boxContent }) {
	const navigate = useNavigate();
	const signInInitialValue = {
		email: "",
		password: "",
	};
	const signUpInitialValue = {
		email: "",
		password: "",
		checkPassword: "",
	};

	return (
		<Container>
			{boxContent === "loginBox" &&
				<>
					<PageTitle title={"login"} />
					<Button buttonShape={"github"} />
					<Input placeholder="Email" />
					<Input placeholder="Senha" />
					<Input placeholder="Confirme sua senha" />
					<Button buttonShape={"notRegistered"} />
					<Button buttonShape={"sign-in"} />
				</>
			}

		</Container>
	);
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
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