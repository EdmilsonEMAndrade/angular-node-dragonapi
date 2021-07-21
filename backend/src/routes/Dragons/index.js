const express = require('express');

const DragonController =  require('../../controllers/Dragon');
const getDragon = require('../../middleware/Dragon/getDragon');

const router = express.Router();

router.get('/', DragonController.index)
router.get('/:id', getDragon, DragonController.show)
router.post('/', DragonController.store);
router.put('/:id', getDragon, DragonController.update)
router.delete('/:id', getDragon, DragonController.delete)

module.exports = router;
