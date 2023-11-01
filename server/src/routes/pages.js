const router = require('express').Router();

const { getPages, createPage, getPageByLink, deletePageByLink, addBlockToPage } = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);
router.delete('/pages/:link', deletePageByLink);
router.post('/pages/:link/block/:type/:index', addBlockToPage);

module.exports = router;
