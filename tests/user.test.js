const request = require("supertest");
const app = require("../src/app");

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

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
