note:
1. Every component that needs users does so on its own. On page load, this creates multiple https GET requests. State management could prevent this from happening. The state allows components to share user data easily.

In addition, updates to users (such as adding a hobby or creating a new user) do not appear immediately in the user interface.A refresh triggers the http GET from the backend, which updates the new users.An HTTP GET could be forced on every update to improve this.

The third point. The AWS database has been set up. The DB was created, but I encountered errors while linking it to NodeJS.By hard-coding the DB in node js, I was able to have the task working.If I had more time, I would connect the database to the node js server and implement the necessary logic to update the database.

functionalities:
1. add user.input: name (string)
2. add hobby.inputs:user id (int)hobby (string)
assumptions:- A new hobby will override an existing hobby if the given user has one.
3. delete user.input: user id (int)