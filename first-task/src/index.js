import './sass/main.scss';
import { itemClick, showForm, tableClick } from './js/buttonsEvent';
import { mainTableCreator, subTableCreator } from './js/tableCreator';
import { arr } from './js/data';
import { addItem } from './js/formSubmit';
import { createOptions, getFormElements } from './js/utils';

const mainTable = document.querySelector('#main-table-content');
const subTable = document.querySelector('#sub-table-content');
const showFormBtn = document.querySelector('#show-form');
const addForm = document.querySelector('#add-form');
const mainTableBtns = document.querySelector('#main-table-btns');

const App = {

  state: {
    rows: arr,
    arch: false,
  },

  setState(state) {
    this.state = state;
  },

  mainTableStructure: ['title', 'creationDate', 'category', 'content', 'dates', 'icons'],
  subTableStructure: ['cat', 'amount', 'arch'],

  categories: ['Task', 'Random Thought', 'Idea'],

  render(mainTable, subTable) {
    const { rows, arch } = this.state;

    mainTableCreator(mainTable, this.mainTableStructure, rows, arch);
    subTableCreator(subTable, this.subTableStructure, rows);
    createOptions(this.categories);
  },

};

App.render(mainTable, subTable);

showFormBtn.addEventListener('click', () => {
  showForm(addForm);
});

addForm.addEventListener('submit', (e) => {
  const { dates, title, content, category } = getFormElements();
  const { state } = App;
  const item = addItem(e);

  if (item) {
    dates.value = '';
    title.value = '';
    content.value = '';
    category.value = '';

    App.setState({ ...state, rows: [...state.rows, item] });
    App.render(mainTable, subTable);
  }
});

mainTable.addEventListener('click', (e) => {
  const { state } = App;
  const data = itemClick(e, state.rows, addForm);

  App.setState({ ...state, rows: data });
  App.render(mainTable, subTable);
});

mainTableBtns.addEventListener('click', (e) => {
  const { state } = App;
  const { rows, arch } = tableClick(e, state);

  App.setState({ ...state, rows, arch });
  App.render(mainTable, subTable);
});






