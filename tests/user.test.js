const request = require("supertest");
const app = require("../src/app");

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Gautier",
      email: "g.qsdfh@gmail.com",
      password: "MyPass777!"
    })
    .expect(201);
});
