const mongoose = require('mongoose');

const mongoDB = async function main() {
    await mongoose.connect('mongodb://localhost:27017/UAS_KK4-A')

    console.log('DB connected')
}

module.exports = mongoDB