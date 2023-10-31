const Page = require('../models/pages');

const checkPageNameExists = async (name, link) => {
    const nameExists = await Page.findOne({ name });
    const linkExists = await Page.findOne({ link });
    return nameExists && linkExists;
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

    if (!checkPageNameExists(body.name)) {
        return response.status(500).send('Выберите другое имя страницы');
    }

    const mainBlock = {
        type: 'main',
        settings: {
            inverted: false,
        },
        content: {
            title: body.name,
            description:
                'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
            action: {
                active: true,
                text: 'Призыв к действию',
            },
        },
    };

    try {
        const page = await Page.create({ ...body, blocks: [mainBlock] });
        return response.status(201).send(page);
    } catch (error) {
        return response.status(500).send(error);
    }
}

const getPageByLink = async (request, response) => {
    const { link } = request.params;
    try {
        const page = await Page.findOne({ link });
        if (page) {
            return response.status(200).send(page);
        } else {
            return response.status(404).send('Страница не найдена');
        }
    } catch (error) {
        return response.status(500).send(error);
    }
};

module.exports = {
    getPages,
    createPage,
    getPageByLink,
};
