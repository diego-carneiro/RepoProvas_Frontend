import styled from "styled-components";
import LoginBox from "../LoginComponents/LoginBox";

export default function Container() {
    return(
        <Content>
            <LoginBox />
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