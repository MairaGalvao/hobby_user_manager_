export const getUsers = () => {
	return fetch("http://localhost:3001/user").then((res) => res.json());
};
