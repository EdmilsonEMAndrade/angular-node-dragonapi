const express = require('express');

const DragonController =  require('../../controllers/Dragon');
const getDragon = require('../../middleware/Dragon/getDragon');
const isImage = require('../../middleware/Dragon/isImage');
const router = express.Router();

router.get('/', DragonController.index)
router.get('/:id', getDragon, DragonController.show)
router.post('/',isImage, DragonController.store);
router.put('/:id', isImage, getDragon, DragonController.update)
router.delete('/:id', getDragon, DragonController.delete)

module.exports = router;
