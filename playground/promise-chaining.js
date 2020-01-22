require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5e22f5f6f6235935f3fbdb55", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
