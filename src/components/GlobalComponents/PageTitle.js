import styled from "styled-components";

export default function PageTitle({ title }) {

    return (
        <>
            {title === "login" && <TitleSection><h1>Login</h1></TitleSection>}
        </>
    );
}
// ::::::::::Styled-Components::::::::::
const TitleSection = styled.div`
    width: 464px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 30px;
	}
`
