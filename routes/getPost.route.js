const express = require('express');
const router = express.Router();
const controllers = require('../controllers/include')

router.get('/:Id',controllers.getPostController.getPostById)

module.exports = router;