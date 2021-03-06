const express = require("express");
const path = require("path");
const app = express();

// Serve the static files from the React app
application.use("/public", express.static(path.join(__dirname, "public")));

// // Handles any requests that don't match the ones above
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

const port = process.env.PORT || 3000;

app.listen(port);

console.log("App is listening on port " + port);
