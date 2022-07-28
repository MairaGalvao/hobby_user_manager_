import React from "react";
import AddUserForm from "./AddUserForm";
import AddHobbyForm from "./AddHobbyForm";
import MainResults from "./MainResults";

function MainForm() {
	return (
		<>
			<AddUserForm />
			<AddHobbyForm />
			<MainResults />
		</>
	);
}

export default MainForm;
