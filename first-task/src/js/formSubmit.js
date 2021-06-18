import { dateTransform, getFormElements, formValidation } from './utils';

export const addItem = (e) => {
  e.preventDefault();

  const { category, content, title, dates } = getFormElements();
  const normalizeDate = dateTransform(dates.value);
  const date = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const creationDate = date.toLocaleString('en-US', options);
  const item = {
    title: title.value,
    creationDate,
    isArchived: false,
    category: category.value,
    content: content.value,
    dates: normalizeDate,
    icons: '<i class="bi bi-pencil update"></i><i class="bi bi-save archive"></i><i class="bi bi-trash delete"></i>',
  };

  const valid = formValidation();
  if (!valid) {
    alert('All lines must be completed');
    return null;
  }

  return item;
};

