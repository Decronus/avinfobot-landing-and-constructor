const Page = require('../models/pages');

async function checkPageLinkExists(link) {
    const linkExists = await Page.findOne({ link });
    console.log('nameExists', !!linkExists);
    return !!linkExists;
}

function mainBlockConstructor(body) {
    return {
        type: 'main',
        settings: {
            inverted: false,
            readNext: true,
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
}

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
    const { link } = request.params;
    try {
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
    const { link } = request.params;
    try {
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

module.exports = {
    getPages,
    createPage,
    getPageByLink,
    deletePageByLink,
};
