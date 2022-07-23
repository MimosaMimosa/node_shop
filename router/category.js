const router = require('express-promise-router')();
const { index, create, show, destroy } = require('../controller/category');
const { storeRequest } = require('../validator/category');

router.get('/', index);
router.get('/:id', show);
router.post('/', storeRequest, create);
router.delete('/:id', destroy);

module.exports = router;
