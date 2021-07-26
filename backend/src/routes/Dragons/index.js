const express = require('express');

const DragonController =  require('../../controllers/Dragon');
const validationDataList = require('../../middleware/Dragon/validationDataList');
const validationParams = require('../../middleware/Dragon/validationParams');
const getDragon = require('../../middleware/Dragon/getDragon');
const router = express.Router();

router.get('/',validationDataList, DragonController.index)
router.get('/:id',getDragon, DragonController.show)
router.post('/',validationParams, DragonController.store);
router.put('/:id', getDragon,validationParams, DragonController.update)
router.delete('/:id', getDragon, DragonController.delete)

module.exports = router;
