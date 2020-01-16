// CRUD

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
// In destructuring coding, we do like this :
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    // console.log("Connected correctly");
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5e1ee1975effc6b89c164221") },
    //   (error, user) => {
    //     if (error) {
    //       console.log("Unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    db.collection("users")
      .find({ age: 28 })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection("users")
      .find({ age: 28 })
      .count((error, users) => {
        console.log(users);
      });
  }
);
