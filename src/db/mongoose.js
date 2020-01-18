const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid...");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});

const me = new User({
  name: "      Mike  ",
  email: "mike@me.io       "
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
