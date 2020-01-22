require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5e26ff9aef8b7174fe96c738")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, status) => {
  const task = await Task.findByIdAndDelete(id);
  const pendingTasks = await Task.countDocuments({ status });

  return pendingTasks;
};

deleteTaskAndCount("5e26fefcef8b7174fe96c735", false)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
