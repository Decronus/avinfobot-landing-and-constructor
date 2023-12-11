const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: [
            'main',
            'twoColumns',
            'title',
            'textWithImage',
            'bullets',
            'titleWithText',
            'galleryWithText',
            'titleWithBg',
        ],
        required: true,
    },

    settings: {
        inverted: {
            type: Boolean,
            required: true,
            default: false,
        },
        readNext: {
            type: Boolean,
            required: false,
        },
    },

    content: {
        title: {
            type: String,
            required: false,
        },
        subtitle: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        firstColumnText: {
            type: String,
            required: false,
        },
        secondColumnText: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: false,
        },
        texts: {
            type: Array,
            required: false,
            default: undefined,
        },
        action: {
            active: {
                type: Boolean,
                required: false,
            },
            text: {
                type: String,
                required: false,
            },
            link: {
                type: String,
                required: false,
            },
        },
        images: {
            type: Array,
            required: false,
            default: undefined,
        },
        bullets: {
            type: Array,
            required: false,
            default: undefined,
        },
    },
});

const pageSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true,
    },
    blocks: [blockSchema],
});

module.exports = mongoose.model('page', pageSchema);
