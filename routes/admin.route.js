const express = require('express');
const router = express.Router();
const controllers = require('../controllers/include')

router.get('/',controllers.adminController.getAdmin)

router.post('/',controllers.adminController.postEditAdmin)

module.exports = router;