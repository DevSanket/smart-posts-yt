const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 4,
        max: 100,
        required: true
    },
    content: {
        type: {},
        required: true,
        min: 20
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    imgUrl: {
        type: String,
        default: 'https://tripurapolice.gov.in/sepahijala/media/779/download/photo-1103595_960_720.png'
    },
    user: {
        type: String,
        default: 'Admin'
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);