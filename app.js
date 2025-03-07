const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const lodash = require("lodash"); // Package with a known vulnerability (CVE-2019-10744)
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Route vulnerable to SQL Injection
app.get("/search", (req, res) => {
  const searchTerm = req.query.term;
  const sql = `SELECT * FROM products WHERE name = '${searchTerm}'`; // Vulnerable to SQL Injection
  // Executes the SQL query...
});

// Route vulnerable to XSS (Cross-Site Scripting)
app.get("/user/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`<h1>Welcome, ${userName}</h1>`); // Vulnerable to XSS
});

// Route vulnerable to CSRF (Cross-Site Request Forgery)
app.post("/transfer", (req, res) => {
  const amount = req.body.amount;
  // Transfers the specified amount to a recipient (not implemented here)
});

// Route vulnerable to RCE (Remote Code Execution)
app.get("/execute", (req, res) => {
  const command = req.query.command;
  // Executes the specified command on the server (not implemented here)
});

// Route that exposes sensitive data
app.get("/user/profile", (req, res) => {
  const userId = req.cookies.userId;
  // Returns the user profile with the specified ID (not implemented here)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
