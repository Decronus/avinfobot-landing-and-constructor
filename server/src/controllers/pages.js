const Page = require('../models/pages');
const fs = require('fs');
const path = require('path');
const { blocksMap, mainBlockConstructor } = require('../utils/blocks');

async function checkPageLinkExists(link) {
    const linkExists = await Page.findOne({ link });
    if (!!linkExists) throw new Error('Ссылка должна быть уникальной, задайте другое имя страницы');
}

function deleteImagesFromFolder(images) {
    if (images) {
        images.forEach((image) => {
            if (image) {
                const imagePathToDelete = path.join(process.cwd(), image);
                if (fs.existsSync(imagePathToDelete)) {
                    fs.unlinkSync(imagePathToDelete);
                    console.log('Изображение удалено:', image);
                } else {
                    console.log('Изображение не найдено.');
                }
            }
        });
    }
}

async function getPages(request, response) {
    try {
        const pages = await Page.find().sort({ createdAt: -1 });
        return response.status(200).send(pages);
    } catch (error) {
        return response.status(500).send(error);
    }
}

async function createPage(request, response) {
    try {
        const { body } = request;
        await checkPageLinkExists(body.link);

        const page = await Page.create({ ...body, blocks: [mainBlockConstructor(body)] });
        return response.status(201).send(page);
    } catch (error) {
        return response.status(500).send(error.message);
    }
}

const getPageByLink = async (request, response) => {
    try {
        const { link } = request.params;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
        }
        handleErrors();

        const page = await Page.findOne({ link });
        if (page) {
            return response.status(200).send(page);
        } else {
            throw new Error('Страница не найдена');
        }
    } catch (error) {
        return response.status(500).send(error.message);
    }
};

const deletePageByLink = async (request, response) => {
    try {
        const { link } = request.params;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
        }
        handleErrors();

        let page = await Page.findOne({ link });

        if (page) {
            page.blocks?.forEach((block) => deleteImagesFromFolder(block.content.images));

            page = await Page.findOneAndDelete({ link });
            const pages = await Page.find();
            return response.status(200).send(pages);
        } else {
            throw new Error('Страница не найдена');
        }
    } catch (error) {
        return response.status(500).send(error.message);
    }
};

async function addBlockToPage(req, res) {
    try {
        const { link, type, index } = req.params;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (!blocksMap[type]) {
                throw new Error(`Неправильный тип блока: ${type}`);
            }
            if (isNaN(index)) {
                throw new Error('Индекс блока должен быть числом');
            }
            if (+index < 0) {
                throw new Error('Индекс блока должен быть больше или равен нулю');
            }
        }
        handleErrors(req);

        const page = await Page.findOneAndUpdate(
            { link },
            { $push: { blocks: { $each: [blocksMap[type]], $position: index } } },
            { new: true }
        );
        return res.status(201).send(page);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteBlockFromPage(req, res) {
    try {
        const { link, id } = req.params;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (id === 'undefined') {
                throw new Error(`Неправильный id блока: ${id}`);
            }
        }
        handleErrors();

        let page = await Page.findOne({ link });
        const targetBlock = page.blocks.find((block) => JSON.stringify(block._id).includes(id));
        if (targetBlock) {
            deleteImagesFromFolder(targetBlock.content.images);
        }
        page = await Page.findOneAndUpdate({ link }, { $pull: { blocks: { _id: id } } }, { new: true });
        return res.status(200).send(page);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateBlockContent(req, res) {
    try {
        const { link, index } = req.params;
        const { body } = req;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (isNaN(index)) {
                throw new Error('Индекс блока должен быть числом');
            }
            if (+index < 0) {
                throw new Error('Индекс блока должен быть больше или равен нулю');
            }
            if (!body) throw new Error('Пустое тело запроса');
        }
        handleErrors();

        const page = await Page.findOne({ link });
        page.blocks[index].content = body;
        await page.save();
        return res.status(200).send(body);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateBlockSettings(req, res) {
    try {
        const { link, index } = req.params;
        const { body } = req;

        function handleErrors() {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (isNaN(index)) {
                throw new Error('Индекс блока должен быть числом');
            }
            if (+index < 0) {
                throw new Error('Индекс блока должен быть больше или равен нулю');
            }
            if (!body) throw new Error('Пустое тело запроса');
        }
        handleErrors();

        const page = await Page.findOne({ link });
        page.blocks[index].settings = body;
        await page.save();
        return res.status(200).send(page.blocks[index].settings);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function swapBlocks(req, res) {
    try {
        const { link, prevIndex, nextIndex } = req.params;

        function handleErrors(req) {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (isNaN(prevIndex)) {
                throw new Error('Предыдущий индекс блока должен быть числом');
            }
            if (isNaN(nextIndex)) {
                throw new Error('Следующий индекс блока должен быть числом');
            }
            if (+prevIndex < 0) {
                throw new Error('Предыдущий индекс блока должен быть больше или равен нулю');
            }
            if (+nextIndex < 0) {
                throw new Error('Следующий индекс блока должен быть больше или равен нулю');
            }
        }
        handleErrors(req);

        const page = await Page.findOne({ link });
        if (page) {
            const prevBlock = page.blocks[prevIndex];
            const nextBlock = page.blocks[nextIndex];
            page.blocks[prevIndex] = nextBlock;
            page.blocks[nextIndex] = prevBlock;
        }

        const updatedPage = await page.save();
        if (updatedPage) {
            return res.status(200).send(updatedPage);
        } else {
            throw new Error('Ошибка при обновлении страницы');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function uploadImages(req, res) {
    try {
        const { link, index } = req.params;
        const { files } = req;
        console.log('files', files);

        function handleErrors(req) {
            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка страницы: ${link}`);
            }
            if (isNaN(index)) {
                throw new Error('Индекс блока должен быть числом');
            }
            if (+index < 0) {
                throw new Error('Индекс блока должен быть больше или равен нулю');
            }
        }
        handleErrors(req);

        const page = await Page.findOne({ link });
        const oldImages = page.blocks[index].content.images ? [...page.blocks[index].content.images] : [];

        // Собираем пути к новым изображениям в массив
        const newImages = [];
        files.forEach((file) => {
            newImages.push(file.path);
        });

        // Извлекаем текущий массив изображений, если есть, и индексы к нему
        const originImages = [...oldImages];
        const imagesIndexes = JSON.parse(req.body.imagesIndexes);

        // Заменяем исходные изображения на новые под соответствующими индексами
        imagesIndexes.forEach((el, index) => originImages.splice(el, 1, newImages[index]));
        page.blocks[index].content.images = originImages;

        // Удаляем изображения, которые больше не используются
        oldImages.forEach((image) => {
            if (image) {
                if (!originImages.includes(image)) {
                    const imagePathToDelete = path.join(process.cwd(), image);
                    if (fs.existsSync(imagePathToDelete)) {
                        fs.unlinkSync(imagePathToDelete);
                        console.log('Изображение удалено:', image);
                    } else {
                        console.log('Изображение не найдено:', image);
                    }
                }
            }
        });

        await page.save();
        return res.status(201).send(page.blocks[index].content);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updatePageSettings(req, res) {
    try {
        const { link: pageLink } = req.params;
        const { body } = req;
        const { name, link } = body;
        await checkPageLinkExists(link);

        function handleErrors() {
            if (!name) {
                throw new Error(`Свойство name обязательно`);
            }
            if (!link) {
                throw new Error(`Свойство link обязательно`);
            }
        }
        handleErrors();

        const page = await Page.findOne({ link: pageLink });

        if (page) {
            page.name = name;
            page.link = link;
            await page.save();
            return res.status(200).send(body);
        } else {
            throw new Error(`Страница со ссылкой "${pageLink}" не найдена`);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getPages,
    createPage,
    getPageByLink,
    deletePageByLink,
    addBlockToPage,
    deleteBlockFromPage,
    swapBlocks,
    updateBlockContent,
    updateBlockSettings,
    uploadImages,
    updatePageSettings,
};
