const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); // Enable CORS for all routes
app.post("/sign-in", (req, res) => {
  console.log("coś");
  res.json({ success: true, error: null, value: { email: "cokolwiek", password: "Haslo123" } });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
