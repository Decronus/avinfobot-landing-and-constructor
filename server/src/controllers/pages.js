const Page = require('../models/pages');
const fs = require('fs');
const path = require('path');

async function checkPageLinkExists(link) {
    const linkExists = await Page.findOne({ link });
    return !!linkExists;
}

function deleteImagesFromFolder(images) {
    if (images) {
        images.forEach((image) => {
            const imagePathToDelete = path.join(process.cwd(), image);
            if (fs.existsSync(imagePathToDelete)) {
                fs.unlinkSync(imagePathToDelete);
                console.log('Изображение удалено:', image);
            } else {
                console.log('Изображение не найдено.');
            }
        });
    }
}

function mainBlockConstructor(body) {
    return {
        type: 'main',
        settings: {
            inverted: false,
            readNext: true,
        },
        content: {
            title: body?.name || 'asdfasdfasdf',
            description:
                'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
            action: {
                active: true,
                text: 'Призыв к действию',
            },
            images: [],
        },
    };
}

function twoColumnsBlockConstructor() {
    return {
        type: 'twoColumns',
        settings: {
            inverted: false,
        },
        content: {
            title: 'Lorem ipsum',
            subtitle: 'Lorem ipsum dolor sit amet consectetur.',
            firstColumnText:
                'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
            secondColumnText:
                'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet.',
        },
    };
}

function titleBlockConstructor() {
    return {
        type: 'title',
        settings: {
            inverted: false,
        },
        content: {
            title: 'Lorem ipsum',
        },
    };
}

function textWithImageBlockConstructor() {
    return {
        type: 'textWithImage',
        settings: {
            inverted: false,
        },
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
            images: [],
        },
    };
}

const blocksMap = {
    main: mainBlockConstructor(),
    twoColumns: twoColumnsBlockConstructor(),
    title: titleBlockConstructor(),
    textWithImage: textWithImageBlockConstructor(),
};

async function getPages(request, response) {
    try {
        const pages = await Page.find();
        return response.status(200).send(pages);
    } catch (error) {
        return response.status(500).send(error);
    }
}

async function createPage(request, response) {
    const { body } = request;
    if (await checkPageLinkExists(body.link)) {
        return response.status(500).send('Ссылка должна быть уникальной, задайте другое имя');
    }
    try {
        const page = await Page.create({ ...body, blocks: [mainBlockConstructor(body)] });
        return response.status(201).send(page);
    } catch (error) {
        return response.status(500).send('Ошибка при обработке запроса');
    }
}

const getPageByLink = async (request, response) => {
    try {
        const { link } = request.params;
        const page = await Page.findOne({ link });
        if (page) {
            return response.status(200).send(page);
        } else {
            return response.status(404).send('Страница не найдена');
        }
    } catch (error) {
        return response.status(500).send('Ошибка при обработке запроса');
    }
};

const deletePageByLink = async (request, response) => {
    try {
        const { link } = request.params;
        const page = await Page.findOneAndDelete({ link });
        if (page) {
            const pages = await Page.find();
            return response.status(200).send(pages);
        } else {
            return response.status(404).send('Страница не найдена');
        }
    } catch (error) {
        return response.status(500).send('Ошибка при обработке запроса');
    }
};

async function addBlockToPage(req, res) {
    try {
        function handleErrors(req) {
            const { link, type, index } = req.params;

            if (link === 'undefined') {
                throw new Error(`Неправильная ссылка блока: ${link}`);
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

        const { link, type, index } = req.params;

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
        let page = await Page.findOne({ link });
        const targetBlock = page.blocks.find((block) => (block._id = id));
        deleteImagesFromFolder(targetBlock.content.images);

        page = await Page.findOneAndUpdate({ link }, { $pull: { blocks: { _id: id } } }, { new: true });
        return res.status(200).send(page);
    } catch (error) {
        return res.status(500).send('Ошибка при обработке запроса');
    }
}

async function updateBlockContent(req, res) {
    try {
        const { link, index } = req.params;
        const { body } = req;
        if (!body) throw new Error('Пустое тело запроса');

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
        if (!body) throw new Error('Пустое тело запроса');

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
        const page = await Page.findOne({ link });
        const prevBlock = page.blocks[prevIndex];
        const nextBlock = page.blocks[nextIndex];
        page.blocks[prevIndex] = nextBlock;
        page.blocks[nextIndex] = prevBlock;
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
        const page = await Page.findOne({ link });
        const oldImages = page.blocks[index].content.images ? [...page.blocks[index].content.images] : [];

        // Собираем пути к новым изображениям в массив
        const newImages = [];
        files.forEach((file) => {
            newImages.push(file.path);
        });

        // Извлекаем текущий массив изображений, если есть, и индексы к нему
        const originImages = [...oldImages];
        const filesIndexes = JSON.parse(req.body.filesIndexes);

        // Заменяем исходные изображения на новые под соответствующими индексами
        filesIndexes.forEach((el, index) => originImages.splice(el, 1, newImages[index]));
        page.blocks[index].content.images = originImages;

        // Удаляем изображения, которые больше не используются
        oldImages.forEach((image) => {
            if (!originImages.includes(image)) {
                const imagePathToDelete = path.join(process.cwd(), image);
                if (fs.existsSync(imagePathToDelete)) {
                    fs.unlinkSync(imagePathToDelete);
                    console.log('Изображение удалено:', image);
                } else {
                    console.log('Изображение не найдено.');
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
            return res.status(404).send(`Страница со ссылкой "${pageLink}" не найдена`);
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
