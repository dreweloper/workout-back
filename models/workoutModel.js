const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({

    title: { type: String },
    subtitle: { type: String },
    menu: {
        title: { type: String },
        subtitle: { type: String }
    },
    pills: [
        {
            id: { type: Number },
            title: { type: String },
            subtitle: { type: String },
            url_pdf: { type: String },
            url_iframe_notebook: { type: String },
            url_iframe_vimeo: { type: String },
            url_slack: { type: String },
            url_challenge: { type: String }
        }
    ]
}, { timestamps: true });


module.exports = model('Workout', workoutSchema);