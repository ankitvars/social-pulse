const express = require("express");
const app = express();
const port = 8000;

app.use('/', require("./routes/index"))

app.listen(port, error => {
	if (error) {
		console.log(`Error is running in the Server: ${error}`);
	}
	console.log(`Server is running on port : ${port}`);
});
