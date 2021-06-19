module.exports = {
    createStatistic(data) {
        const reqData = {}
        for (let i = 0; i < data.length; i++) {
            if (!reqData.hasOwnProperty(data[i].category)) {
                reqData[data[i].category] = 1
            } else {
                reqData[data[i].category] += 1
            }
        }
        return reqData
    },
    createNote(data) {
        const id = new Date().getTime()
        return {...data, id}
    },
    updateItem(data, id, item) {
        const index = data.findIndex(note => note.id === id)
        return [...data.slice(0, index), {...item, id: data[index].id}, ...data.slice(index + 1)]
    },
    checkForExist(data, id) {
        return data.findIndex(note => note.id === +id) !== -1
    }
}