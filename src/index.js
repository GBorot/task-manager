const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   // console.log(req.method, req.path);
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Please try again later, the app is in maintenance...");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// all HTTP status : https://httpstatuses.com/

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "login", {
    expiresIn: "7 days"
  });

  console.log(token);

  const data = jwt.verify(token, "login");

  console.log(data);
};

myFunction();
