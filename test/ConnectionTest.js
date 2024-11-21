const mongoose = require('mongoose');
const assert = require('assert');
const userSchema = require('../models/userSchema'); // Make sure the correct path is used
require('dotenv').config();

describe("db test", function() {
  // Connect to the database before running tests
  this.timeout(10000); 
  before((done) => {
    mongoose
      .connect(process.env.monogo_uri)
      .then(() => {
        console.log("Connected to MongoDB");
        done(); // Notify Mocha that async setup is complete
      })
      .catch((err) => {
        console.log("Connection error:", err);
        done("ERROR"); // Pass the error to Mocha
      });
  });

  // Test case to insert a user document
  it("insert Success", (done) => {
    userSchema
      .create({
        name: "John Doe", // Add required fields for your schema
        email: "john@example.com",
      })
      .then((res) => {
        assert.ok(res._id); // Check if the created document has an _id
        done(); // Test is complete
      })
      .catch((err) => {
        
         done(err)
       
      });
  });

  // Close connection after tests
  after((done) => {
    mongoose.connection.close(() => {
      console.log("MongoDB connection closed");
      done();
    });
  });
});
