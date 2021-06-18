import { dateTransformToForm, getFormElements } from './utils';

const findRowId = e => {
  const regEx = /\d+/g;
  return +e.target.closest('tr').id.match(regEx)[0];
};

export const itemClick = (e, data, element) => {
  const id = findRowId(e);

  if ([...e.target.classList].includes('update')) {
    const { dates, title, content, category } = getFormElements();

    [...element.classList].includes('hide') && element.classList.remove('hide');

    dates.value = dateTransformToForm(data[id].dates.split('/'));
    title.value = data[id].title;
    content.value = data[id].content;
    category.value = data[id].category;

    return [...data.slice(0, id), ...data.slice(id + 1)];
  }

  if ([...e.target.classList].includes('delete')) return [...data.slice(0, id), ...data.slice(id + 1)];

  if ([...e.target.classList].includes('archive')) {
    const newRow = Object.assign({}, data[id], { isArchived: !data[id].isArchived });
    return [...data.slice(0, id), newRow, ...data.slice(id + 1)];

  }

  return data;
};

export const tableClick = (e, state) => {
  const { rows, arch } = state;
  if ([...e.target.classList].includes('show-arch')) {
    return { rows, arch: !arch };
  }

  if ([...e.target.classList].includes('delete-all')) {
    const data = rows.filter(el => el.isArchived !== arch);
    return { rows: data, arch: arch };
  }
  return { rows, arch: arch };
};

export const showForm = (element) => [...element.classList].includes('hide') ? element.classList.remove('hide') : element.classList.add('hide');
