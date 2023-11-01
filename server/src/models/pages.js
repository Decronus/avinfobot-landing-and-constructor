const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['main', 'twoColumns', 'title'],
        required: true,
        minLength: 2,
    },

    settings: {
        inverted: {
            type: Boolean,
            required: true,
            default: false,
        },
        readNext: {
            type: Boolean,
            required: true,
            default: true,
        },
    },

    content: {
        title: {
            type: String,
            required: false,
            minLength: 2,
        },
        subtitle: {
            type: String,
            required: false,
            minLength: 2,
        },
        description: {
            type: String,
            required: false,
            minLength: 2,
        },
        action: {
            active: {
                type: Boolean,
                required: true,
                default: true,
            },
            text: {
                type: String,
                required: false,
                default: 'Призыв к действию',
            },
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
        minLength: 2,
    },
    link: {
        type: String,
        required: true,
        minLength: 2,
    },
    image: {
        type: String,
        required: false,
    },
    blocks: [blockSchema],
});

module.exports = mongoose.model('page', pageSchema);
