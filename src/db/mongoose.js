const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

// const me = new User({
//   name: "Gautier",
//   age: 28
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(e => {
//     console.log("Error!", e);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const secondTask = new Task({
  description: "Stop being stupid and believing in people",
  completed: false
})
  .save()
  .then(() => {
    console.log(secondTask);
  })
  .catch(e => {
    console.log("Error!", e);
  });
