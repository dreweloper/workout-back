const { Schema, model } = require('mongoose');

const lessonSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    menu: {
        title: {
            type: String,
            required: true
        },
        subtitle: { type: String }
    },
    pills: [
        {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: true
            },
            url_pdf: { type: String },
            url_iframe_notebook: { type: String },
            url_iframe_vimeo: { type: String },
            url_slack: {
                type: String,
                required: true
            },
            url_challenge: { type: String }
        }
    ]
}, { timestamps: true });


module.exports = model('Lesson', lessonSchema);