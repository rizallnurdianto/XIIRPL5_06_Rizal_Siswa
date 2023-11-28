const Student = require('../models/Student')

module.exports = {
    index: async (req, res) => {
        try {
            const students = await Student.find().sort({ nis: 'asc' });

            const simplifiedData = students.map(student => ({
                name: student.name,
                class: student.class,
                status: student.status,
                addInformation: student.addInformation    
            }));

            if (students.length > 0) {
               return res.status(200).json({
                    status: 200,
                    data: simplifiedData,
                    method: req.method,
                    url: req.url
                });
            }
            return res.status(404).json({
                status: 404,
                message: "Data is not found"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        };
    },
    getById: async (req, res) => {
        const id = req.params.id

        try {
            const student = await Student.findById(id)

            if (student) {
                return res.status(200).json({
                    status: true,
                    data: student,
                    method: req.method,
                    url: req.url,
                    message: "get student by id is successfully"
                })
            }
            return res.status(404).json({
                status: 404,
                message: "Student is not found"
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    getByNis: async (req, res) => {
        const nis = req.params

        try {
            const student = await Student.findOne(nis)
            if (student) {
                return res.status(200).json({
                    status: true,
                    data: student,
                    method: req.method,
                    url: req.url,
                    message: "get student by id is successfully"
                })
            }
            return res.status(404).json({
                status: 404,
                message: "Student is not found"
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    store: async (req, res) => {
        const payload = req.body

        try {
            const student = await Student.create(payload)
            
            res.status(200).json({
                status: true,
                data: student,
                method: req.method,
                url: req.url,
                message: "post data is successfully"
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    updateByNis: async (req, res) => {
        const nis = req.params
        const payload = req.body

        try {
            const isStudent = await Student.findOne(nis)
            if (isStudent) {
                const student = await Student.findOneAndUpdate(nis, payload, {
                    new: true,
                    runValidators: true
                })

                return res.status(200).json({
                    status: true,
                    data: student,
                    method: req.method,
                    url: req.url,
                    message: "put data is successfully"
                })
            }
            return res.status(404).json({
                status: 404,
                message: 'Student is not found'
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    
    deleteById: async (req, res) => {
        const id = req.params.id

        try {
            const isStudent = await Student.findById(id)
            if (isStudent) {
                await Student.findByIdAndDelete(id)

                return res.json({
                    status: 200,
                    message: "delete data is successfully",
                    method: req.method,
                    url: req.url,
                });
            }
            return res.status(404).json({
                status: 404,
                message: "Student is not found"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        }
    },
    deleteByNis: async (req, res) => {
        const nis = req.params

        try {
            const isStudent = await Student.findOne(nis)
            if (isStudent) {
                await Student.findOneAndDelete(nis)

                return res.json({
                    status: 200,
                    message: "delete data is successfully",
                    method: req.method,
                    url: req.url,
                })
            }
            return res.status(404).json({
                status: 404,
                message: "Student is not found"
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
}