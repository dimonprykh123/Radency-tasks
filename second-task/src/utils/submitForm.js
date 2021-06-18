import {dateTransform} from "./dateTarnsform";

const addItem = (values) => {
    const {title, dates, category, content} = values
    const normalizeDate = dateTransform(dates);
    const date = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };
    const creationDate = date.toLocaleString('en-US', options);
    const item = {
        id: date,
        title,
        creationDate,
        isArchived: false,
        category,
        content,
        dates: normalizeDate,
    }
    return item
}

export default addItem