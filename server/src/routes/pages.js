const router = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

const {
    getPages,
    createPage,
    getPageByLink,
    deletePageByLink,
    addBlockToPage,
    deleteBlockFromPage,
    swapBlocks,
    updateBlockContent,
    updateBlockSettings,
} = require('../controllers/pages');

router.get('/pages', getPages);
router.get('/pages/:link', getPageByLink);
router.post('/pages', createPage);
router.post('/pages/:link/block/:type/:index', addBlockToPage);
router.put('/pages/:link/swap-blocks/:prevIndex/:nextIndex', swapBlocks);
router.delete('/pages/:link', deletePageByLink);
router.put('/pages/:link/block/:index/content', updateBlockContent);
router.put('/pages/:link/block/:index/settings', updateBlockSettings);
router.delete('/pages/:link/block/:id', deleteBlockFromPage);
router.post('/upload', upload.single('image'), (req, res) => {
    console.log('req', req);
    res.status(201).send('Изображение успешно загружено');
});

module.exports = router;
