import React from "react";
import Header from "../components/GlobalComponents/Header";
import Container from "../components/GlobalComponents/Container";

export default function Login() {
	const storage = (key, value) => {
		localStorage.setItem(key, value);
	}

	return (
		<>
			<Header headerVersion={"v1"} />
			<Container boxContent={"loginBox"} />
		</>

	);
}
