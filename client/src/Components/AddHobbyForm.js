import * as React from "react";
import { getUsers } from "../util.js";
import "../Form.css";

export default function AddHobbyForm() {
	const [value, setValue] = React.useState();
	const [users, setUsers] = React.useState();
	const [selectedUser, setSelectedUser] = React.useState();

	React.useEffect(() => {
		getUsers().then((users) => {
			const arrayName = users.map((userData) => {
				return userData.id;
			});
			setUsers(["---", ...arrayName]);
		});
	}, []);

	return (
		<>
			{users && (
				<>
					<h1 className="title"> Add a user hobby </h1>

					<select
						style={{ margin: "10px" }}
						value={selectedUser}
						onChange={(event) => {
							setSelectedUser(event.target.value);
						}}
					>
						{users.map((elem, i) => {
							return (
								<option key={i} value={elem}>
									{elem}
								</option>
							);
						})}
					</select>

					<input
						placeholder="hobby"
						onChange={(event) => {
							setValue(event.target.value);
						}}
					/>
					<button
						className="btn"
						onClick={() => {
							fetch("http://localhost:3001/hobby", {
								method: "POST",
								headers: {
									Accept: "application/json",
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									user: selectedUser,
									hobby: value,
								}),
							});
						}}
					>
						Add
					</button>
				</>
			)}
		</>
	);
}
