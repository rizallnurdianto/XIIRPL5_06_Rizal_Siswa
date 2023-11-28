const mongoose = require('mongoose')

// field status = hadir || terlambat || izin || sakit || alpha

const StudentSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'nis is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Fill in your name first, boss']
    },
    class: {
        type: String,
        required: [true, 'class is required']
    },
    status: {
        type: String,
        required: [true, 'status is required']
    },
    addInformation: {
        type: String
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Students', StudentSchema)