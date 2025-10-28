const express = require("express");
let port = 4000;
const app = express();
app.use(express.json());
app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;

  const role = req.query.role;
  res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(port, () => {
  console.log(`Server is running`);
});
