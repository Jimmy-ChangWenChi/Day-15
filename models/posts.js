const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '請輸入姓名']
    },
    content: {
        type: String,
        required: [true, '請輸入貼文內容']
    },
    image: {
        type: String,
        
    }
},{
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: false
    },
    collection:"products"
})

const Post = mongoose.model("posts",postSchema);

module.exports = Post
