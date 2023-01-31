const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); // Enable CORS for all routes
app.post("/sign-in", (req, res) => {
  console.log("coś");
  res.json({
    success: true,
    error: null,
    value: {
      email: "cokolwiek",
      password: "Haslo123",
    },
  });
});
app.post("/onboarding", (req, res) => {
  console.log("onboarding");
  res.json({
    success: true,
    error: null,
    value: {
      firstname: "Mike",
      middlename: "John",
      lastname: "Smith",
      birthdate: "04-22-1982",
      phone: "(123)456-7890",
      NPI: "1234567890",
    },
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
