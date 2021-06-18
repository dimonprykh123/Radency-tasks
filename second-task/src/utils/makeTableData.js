const makeTableData = (data) => {

    const transformData = {};
    const returnedData = []

    for (let i = 0; i < data.length; i++) {
        if (!transformData.hasOwnProperty(data[i].category)) {
            transformData[data[i].category] = {
                id: i,
                amount: 1,
                arch: 0,
                cat: data[i].category,
            };
            if (data[i].isArchived) {
                transformData[data[i].category].arch += 1;
            }
        } else {
            transformData[data[i].category].amount += 1;
            if (data[i].isArchived)
                transformData[data[i].category].arch += 1;
        }
    }

    for (let key in transformData) {
        returnedData.push(transformData[key])
    }

    return returnedData
}

export default makeTableData