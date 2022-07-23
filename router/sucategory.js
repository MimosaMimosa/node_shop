const router = require('express-promise-router')();
const { index, create, show, destroy } = require('../controller/subcategory');

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.delete('/:id', destroy);

module.exports = router;
