const router = require('express').Router();

const { getPages, createPage, getPageByLink, deletePageByLink } = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);
router.delete('/pages/:link', deletePageByLink);

module.exports = router;
