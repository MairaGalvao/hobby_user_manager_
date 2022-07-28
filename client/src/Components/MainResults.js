import * as React from "react";
import Results from "./Results";
import { getUsers } from "../util";

function MainResults() {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		getUsers().then((users) => {
			setData(users);
		});
	}, []);

	const onDelete = (elem) => {
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
