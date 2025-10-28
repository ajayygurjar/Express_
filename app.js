const express = require("express");
let port = 4000;
const app = express();
const studentRouter = require("./routes/students");
const courseRouter = require("./routes/courses");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running`);
});
