const router = require('express-promise-router')();
const { index, create, show, destroy } = require('../controller/category');

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;
