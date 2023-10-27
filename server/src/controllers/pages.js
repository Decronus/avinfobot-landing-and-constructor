const Page = require('../models/pages');

const getPages = (request, response) => {
    return Page.find()
        .then((data) => {
            response.status(200).send(data);
        })
        .catch((error) => response.status(500).send(error));
};

const createPage = (request, response) => {
    const { body } = request;
    const mainBlock = {
        type: 'main',
        title: body.name,
        description:
            'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris. Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
        action: {
            active: true,
            text: 'Призыв к действию',
        },
    };
    return Page.create({ ...body, blocks: [mainBlock] })
        .then((book) => {
            response.status(201).send(book);
        })
        .catch((error) => response.status(500).send(error));
};

module.exports = {
    getPages,
    createPage,
};
