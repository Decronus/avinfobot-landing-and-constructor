const router = require('express').Router();

const {
    getPages,
    createPage,
    getPageByLink,
    deletePageByLink,
    addBlockToPage,
    deleteBlockFromPage,
} = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);
router.delete('/pages/:link', deletePageByLink);
router.post('/pages/:link/block/:type/:index', addBlockToPage);
router.delete('/pages/:link/block/:index', deleteBlockFromPage);

module.exports = router;
