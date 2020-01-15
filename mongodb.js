// CRUD

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "Gautier",
    //     age: 28
    //   },
    //   (error, result) => {
    //     // http://mongodb.github.io/node-mongodb-native/3.4/api/Collection.html#~insertOneWriteOpCallback
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Gautier",
    //       age: 28
    //     },
    //     {
    //       name: "Gunter",
    //       age: 27
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert documents!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Learn Node JS",
          completed: false
        },
        {
          description: "Empty trash kitchen",
          completed: true
        },
        {
          description: "Kiss Gratiane today",
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          console.log("Unable to insert task");
        }

        console.log(result.ops);
      }
    );
  }
);
