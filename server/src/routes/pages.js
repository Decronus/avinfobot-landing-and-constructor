const router = require('express').Router();

const { getPages, createPage, getPageByLink } = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);

module.exports = router;
