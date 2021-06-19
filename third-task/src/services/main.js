const helpers = require("../helpers/helpers")
const moc = require("../moc/moc")
module.exports = {
    getNote(id) {
        const exist = helpers.checkForExist(moc.state, id)
        return exist ? moc.state.filter(note => note.id === +id)[0] : `No exist note with ${id} id`
    },
    deleteNote(id) {
        const exist = helpers.checkForExist(moc.state, id)
        if (exist) {
            moc.setState(moc.state.filter(note => note.id !== +id))
            return "Successful deleted"
        } else {
            return `No exist note with ${id} id`
        }
    },
    updateNote(note, id) {
        const exist = helpers.checkForExist(moc.state, id)
        if (exist) {

            moc.setState(helpers.updateItem(moc.state, +id, note))
            return "Successful updated item"
        } else {
            return `No exist note with ${id} id`
        }
    },
    createNote(note) {
        moc.setState([...moc.state, helpers.createNote(note)])
        return "Successful created item"
    },
    getAllNotes() {
        return moc.state
    },
    getStatistic() {
        return helpers.createStatistic(moc.state)
    }
}