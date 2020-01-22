require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5e22f5f6f6235935f3fbdb55", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const uptadeAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });

  return count;
};

uptadeAgeAndCount("5e26fc781571ac73f31944ba", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
