const express = require('express');
const dotenv = require('dotenv');
const User = require('./database/models/User');

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/users', (req, res) => {
  return User.fetchAll()
    .then((results) => {
      if (results.length) {
        results = results.toJSON();
        return res.json(results);
      }
      else {
        return res.status(500).send('Users not found');
      }
    });
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
