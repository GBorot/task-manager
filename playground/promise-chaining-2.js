require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5e26ff9aef8b7174fe96c738")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
