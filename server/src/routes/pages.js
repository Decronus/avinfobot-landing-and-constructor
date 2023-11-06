const router = require('express').Router();

const {
    getPages,
    createPage,
    getPageByLink,
    deletePageByLink,
    addBlockToPage,
    deleteBlockFromPage,
    swapBlocks,
} = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);
router.post('/pages/:link/block/:type/:index', addBlockToPage);
router.post('/pages/:link/:prevIndex/:nextIndex', swapBlocks);
router.delete('/pages/:link', deletePageByLink);
router.delete('/pages/:link/block/:id', deleteBlockFromPage);

module.exports = router;
