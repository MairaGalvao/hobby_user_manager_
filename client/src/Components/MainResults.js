import * as React from "react";
import "../Form.css";
import Results from "./Results";
import { getUsers } from "../util";

// todo think of using use reducer, for now, use useState
// useReducer is usually preferable to useState when you have complex state logic
// that involves multiple sub-values or when the next state depends on the previous one.
// useReducer also lets you optimize performance for components that trigger deep updates
// because you can pass dispatch down instead of callbacks.

function MainResults() {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		getUsers().then((users) => {
			setData(users);
		});
	}, []);

	const onDelete = (elem) => {
		// delete request with user
		fetch("http://localhost:3001/user", {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: elem.id,
			}),
		});
	};

	return (
		<>
			{" "}
			{data && (
				<Results
					data={data}
					header={[...Object.keys(data[0]), "delete"]}
					onDelete={onDelete}
				/>
			)}
		</>
	);
}

export default MainResults;
