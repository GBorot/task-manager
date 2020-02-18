const app = require("./app");
const port = process.env.PORT;

// all HTTP status : https://httpstatuses.com/

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
