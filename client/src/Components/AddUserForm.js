import * as React from "react";
import "../Form.css";

export default function AddUserForm() {
	const [value, setValue] = React.useState();

	return (
		<>
			<h1 className="title"> Add a new user </h1>
			<input
				placeholder="user name"
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<button
				className="btn
			"
				onClick={() => {
					fetch("http://localhost:3001/user", {
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							user: value,
						}),
					});
				}}
			>
				Add
			</button>
		</>
	);
}
