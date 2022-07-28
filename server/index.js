const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

let lastId = 4;
let USERS_DB = [
	{ id: 1, name: "Yonatahn", hobby: "football" },
	{ id: 2, name: "Maira", hobby: "code" },
	{ id: 3, name: "Mayan", hobby: "rugby" },
	{ id: 4, name: "Janaina", hobby: "cooking" },
];

app.get("/user", (req, res) => {
	console.log("GET /user");
	res.send(USERS_DB);
});

app.post("/user", jsonParser, (req, res) => {
	console.log("POST /user");
	const userName = req.body.user;
	const userObj = { id: lastId + 1, name: userName };
	USERS_DB.push(userObj);
	lastId = lastId + 1;
	res.status(200);
});

app.delete("/user", jsonParser, (req, res) => {
	console.log("DELETE /user");
	const userIdToDelete = req.body.userId;
	USERS_DB = USERS_DB.filter((elem) => elem.id !== userIdToDelete);
	res.status(200);
});

app.post("/hobby", jsonParser, (req, res) => {
	console.log("POST /hobby");
	const userId = req.body.user;
	const hobby = req.body.hobby;
	const userObjIndex = USERS_DB.findIndex((obj) => obj.id == userId);
	USERS_DB[userObjIndex].hobby = hobby;
	res.status(200);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
