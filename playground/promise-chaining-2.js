require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndRemove("5e26ff15ef8b7174fe96c736")
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
