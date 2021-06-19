const yup = require("yup")

module.exports = yup.object({
    name: yup.string().required().min(1),
    date: yup.date().required(),
    category: yup.string().required(),
    content: yup.string().required().min(1)
})