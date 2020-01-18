const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});

const me = new User({
  name: "Mike",
  age: -3
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(e => {
    console.log("Error!", e);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

// const secondTask = new Task({
//   description: "Stop being stupid and believing in people",
//   completed: false
// })
//   .save()
//   .then(() => {
//     console.log(secondTask);
//   })
//   .catch(e => {
//     console.log("Error!", e);
//   });
