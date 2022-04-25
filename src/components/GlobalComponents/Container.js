import styled from "styled-components";
import SignInSignUpBox from "./SignInSignUpBox";

export default function Container({ boxContent }) {
    return(
        <Content>
            <SignInSignUpBox boxContent={"loginBox"}/>
        </Content>
    );
}

// ::::::::::Styled-Components::::::::::
const Content = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`