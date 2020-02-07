const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// all HTTP status : https://httpstatuses.com/

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");
const main = async () => {
  // const task = await Task.findById("5e3d853ff01e140d570030bb");
  // // going to link user profile to task, we search by owner
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("5e3d847e3077dc0cf84e26f0");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
