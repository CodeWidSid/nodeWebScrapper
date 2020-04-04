const express = require('express');
const router = express.Router();
const controllers = require('../controllers/include')

router.get('/',controllers.indexcontroller.getIndex);

router.post('/',controllers.indexcontroller.postIndex);

router.post('/:id',controllers.indexcontroller.deletePost)

module.exports = router;