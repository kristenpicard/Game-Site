const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamesite");

const scoreSeed = [
  { 
      fullName: "Kristen Picard",
      score: 3
   
  },
  
];

db.Scores
  .deleteMany({})
  .then(() => db.Scores.collection.insertMany(scoreSeed))
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

