const mainService = require("../services/main")

module.exports = {
    getNote(req, res) {
        try {
            res.status(200).json({note: mainService.getNote(req.params.id)})
        } catch (e) {
            res.status(400).send(e)
        }
    },
    deleteNote(req, res) {
        try {
            res.status(200).json({message: mainService.deleteNote(req.params.id)})
        } catch (e) {
            res.status(400).send(e)
        }
    },
    updateNote(req, res) {
        try {
            res.status(200).json({message: mainService.updateNote(req.body, req.params.id)})
        } catch (e) {
            res.status(400).send(e)
        }
    },
    createNote(req, res) {
        try {
            res.status(201).json({message: mainService.createNote(req.body)})
        } catch (e) {
            res.status(400).send(e)
        }
    },
    getAllNotes(req, res) {
        try {
            res.status(200).json({notes: mainService.getAllNotes()})
        } catch (e) {
            res.status(400).send(e)
        }
    },
    getStatistic(req, res) {
        try {
            res.status(200).json({stats: mainService.getStatistic()})
        } catch (e) {
            res.status(400).send(e)
        }
    }

}