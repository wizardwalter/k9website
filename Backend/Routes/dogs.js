var express = require("express");
var router = express.Router();
const dogsController = require("../Controllers/dogController");

router.post('/create', dogsController.createDogs);

router.get('', dogsController.getDogs);

router.get('/:id', dogsController.getDog);


module.exports = router;

