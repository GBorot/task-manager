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

const Task = require("./models/task");
const main = async () => {
  const task = await Task.findById("5e3d853ff01e140d570030bb");
  // going to link user profile to task, we search by owner
  await task.populate("owner").execPopulate();
  console.log(task.owner);
};

main();
