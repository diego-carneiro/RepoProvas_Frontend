import styled from "styled-components";

export default function SearchBar() {
	return (
		<>
			<Container>
				<Input placeholder="Pesquise por disciplina"/>
			</Container>
		</>
	);
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 100%;
  height: 100px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14);
	margin-bottom: 5px;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`
const Input = styled.input`
	width: 464px;
	height: 56px;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.23);
	padding: 8px;
`