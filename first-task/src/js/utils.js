export const createOptions = (data) => {
  const select = document.querySelector('#categories');
  select.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const option = document.createElement('option');
    option.value = data[i];
    option.innerText = data[i];
    select.appendChild(option);
  }
};

export const dateTransform = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getUTCMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const dateTransformToForm = (date) => {

  if (date[0].length === 1)
    date[0] = date[0].padStart(2, '0');

  if (date[1].length === 1)
    date[1] = date[1].padStart(2, '0');

  return date.reverse().join('-');
};

export const getFormElements = () => {
  const title = document.querySelector('#title');
  const dates = document.querySelector('#date');
  const category = document.querySelector('#categories');
  const content = document.querySelector('#body');
  return { content, category, dates, title };
};

export const formValidation = () => {
  const formValues = getFormElements();
  for (let key in formValues) {
    if (formValues[key].value.trim() === '') return false;
  }
  return true;
};