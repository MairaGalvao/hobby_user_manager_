import React, { useEffect } from "react";
import "../Form.css";
import AddUserForm from "./AddUserForm";
import AddHobbyForm from "./AddHobbyForm";
import MainResults from "./MainResults";

function MainForm() {
	// const [data, setData] = React.useState(null);
	// React.useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data.message));
	// }, []);

	// let uname = "maira";
	// let pass = 1234;

	// useEffect(() => {
	// 	const requestOptions = {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({
	// 			title: "testing... React Hooks POST Request Example",
	// 		}),
	// 	};
	// 	fetch("https://reqres.in/api/posts", requestOptions)
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));

	// }, []);

	// fetch("http://localhost:3001/user", {
	// 	method: "POST",
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify({
	// 		// email: uname,
	// 		// password: pass,
	// 	}),
	// })
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		// update App's state with permissions
	// 		console.log(data);
	// 		console.log(data.name);
	// 		console.log(data.age);
	// 		console.log(data.hobby);
	// 	});

	// useEffect(() => {
	// 	fetch("http://localhost:3001/user")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data); //my entire data from node.js

	// 		});
	// }, []);

	const heading = ["Name", "Age", "Hobby"];

	const data = [
		{ name: "Maira", age: 15, city: "New York", hobby: "JiuJitsu" },
		{ name: "Maira", age: 33, city: "Dublin", hobby: "Capoeira" },
		{ name: "Maira", age: 31, city: "Tel Aviv", hobby: "Code" },
		{ name: "Maira", age: 36, city: "Chicago", hobby: "Cooking" },
		{ name: "Maira", age: 36, city: "São Paulo", hobby: "Rugby" },
	];

	return (
		<>
			<AddUserForm />
			<AddHobbyForm />
			<MainResults />
			{/* <Form data={data} heading={heading} /> */}
		</>
	);
}

export default MainForm;
