const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['main', 'twoColumns', 'title'],
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
            minLength: 2,
        },
        secondColumnText: {
            type: String,
            required: false,
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
        },
        imageUrl: {
            type: String,
            required: false,
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
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    blocks: [blockSchema],
});

module.exports = mongoose.model('page', pageSchema);
