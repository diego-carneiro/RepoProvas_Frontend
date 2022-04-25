import styled from "styled-components";


export default function Button({ buttonShape }) {
    return (
        <>
            {buttonShape === "github" && <Github>ENTRAR COM O GITHUB</Github>}
            {buttonShape === "" && <SignInSingUp>ENTRAR</SignInSingUp>}
            {buttonShape === "sign-in" && <SignInSingUp>CADASTRAR</SignInSingUp>}
            {buttonShape === "notRegistered" && <NotRegistered>Não possuo cadastro</NotRegistered>}
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const Github = styled.div`
    width: 464px;
    height: 36px;
    background-color: #424445;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
`
const SignInSingUp = styled.div`
    width: 464px;
    height: 36px;
    background-color: #1976D2;
    border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
`
const NotRegistered = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #4673CA;

    display: flex;
    justify-content: center;
    align-items: center;
`
