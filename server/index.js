const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let db = new sqlite3.Database('./db/data.db', (err) => {
    if (err) {
      console.error(err.message);
    }

    console.log('Connected to the database.');
});

app.post("/api/createUser", (require, response) => {
  const ID = Math.floor((Math.random() * 100000000) + 1);
  const user = require.body.user;
  const pass = require.body.pass;
  const school = require.body.school;
  const ranking = require.body.rank;

  const sqlInsert = "INSERT INTO `Users` (`UserID`, `user`, `pass`, `school`, `ranking`) VALUES (?,?,?,?,?)";
  db.run(sqlInsert, [ID, user, pass, school, ranking], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
});

app.get("/api/getUser", (require, response) => {
  const user = require.query.user;
  const pass = require.query.Pass;

  let id = null;
  let sqlSelect = "SELECT u.UserID FROM Users u WHERE u.user = ? AND u.pass = ?"; 
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});