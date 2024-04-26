const express = require("express");
const app = express();
const port = 3000; // Define the port

const handleRequest = async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.send('Hello, World!');
};

// Route handling using async function
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get('/', async (req, res) => {
  await handleRequest(req, res);
});

// Start the server
const startServer = async () => {
  await app.listen(port);
  console.log(`Web server started. Listening on http://localhost:${port}`);
};

startServer();
