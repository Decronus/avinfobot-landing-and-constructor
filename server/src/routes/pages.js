const router = require('express').Router();

const { getPages, createPage } = require('../controllers/pages');

router.get('/pages', getPages);
router.post('/pages', createPage);

module.exports = router;
