function mainBlockConstructor(body) {
    return {
        type: 'main',
        settings: {
            inverted: false,
            readNext: true,
        },
        content: {
            title: body?.name || 'Lorem ipsum',
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

function bulletsBlockConstructor() {
    return {
        type: 'bullets',
        settings: {
            inverted: false,
        },
        content: {
            bullets: [
                'Lorem ipsum dolor sit amet consectetur. Enim ipsum mollis est vel hendrerit arcu dignissim feugiat mauris.',
                'Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra.',
                'Lacinia eu vestibulum amet sagittis eu integer nibh.',
            ],
        },
    };
}

function titleWithTextBlockConstructor() {
    return {
        type: 'titleWithText',
        settings: {
            inverted: false,
        },
        content: {
            title: 'Lorem ipsum dolor',
            text: 'Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra. Lacinia eu vestibulum amet sagittis eu integer nibh.',
        },
    };
}

function galleryWithTextBlockConstructor() {
    return {
        type: 'galleryWithText',
        settings: {
            inverted: false,
        },
        content: {
            texts: [
                'Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra.',
                'Lacinia eu vestibulum amet sagittis eu integer nibh.',
                'Faucibus dolor mauris urna vel etiam metus vestibulum porttitor aliquet. Nunc aliquet quisque morbi eu mattis egestas viverra.',
            ],
            images: Array(3),
        },
    };
}

const blocksMap = {
    main: mainBlockConstructor(),
    twoColumns: twoColumnsBlockConstructor(),
    title: titleBlockConstructor(),
    textWithImage: textWithImageBlockConstructor(),
    bullets: bulletsBlockConstructor(),
    titleWithText: titleWithTextBlockConstructor(),
    galleryWithText: galleryWithTextBlockConstructor(),
};

module.exports = blocksMap;
