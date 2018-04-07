const express = require('express');

const router = express.Router();

const db = require('../data/helpers/userDb.js');

router.get('/', (req, res) => {
  db.get()
    .then(users => {
      res.json(users)
    });
});


module.exports = router;