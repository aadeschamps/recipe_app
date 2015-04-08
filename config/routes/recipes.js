var express = require('express');
var router = express.Router();
var controller = require('../../app/controller/recipes')

/* GET Recipe page. */

router.get('/', controller.index);
router.get('/new', controller.newPage)
router.post('/', controller.create)

module.exports = router;