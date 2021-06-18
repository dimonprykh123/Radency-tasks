export const dateTransform = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getUTCMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
};

export const dateTransformToForm = (date) => {
    const {dates} = date
    const dateArr = dates.split("/")
    if (dateArr[0].length === 1)
        dateArr[0] = dateArr[0].padStart(2, '0');

    if (dateArr[1].length === 1)
        dateArr[1] = dateArr[1].padStart(2, '0');

    return {...date, dates: dateArr.reverse().join('-')};
};

export const dateTransformByUpdate = (data) => {
    const {dates} = data
    const normalizeDate = dateTransform(dates)
    return {...data, dates: normalizeDate}
}