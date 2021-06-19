const express = require("express")
const router = express.Router()
const validateNote = require("../middlewares/validateNote")
const noteSchema = require("../schemas/noteSchema")
const mainRepo = require("../repositories/main")

router.get("/stats", mainRepo.getStatistic)
router.post("", (validateNote(noteSchema)), mainRepo.createNote)
router.delete("/:id", (mainRepo.deleteNote))
router.get("/:id", mainRepo.getNote)
router.get("", mainRepo.getAllNotes)
router.patch("/:id", (validateNote(noteSchema)), mainRepo.updateNote)


module.exports = router