const express = require("express");
const app = express();


app.get("/", function(req, res) {
	res.send("Hello");
});

app.listen(8000, function() {
	console.log("Server has been started on localhost:8000");
});
