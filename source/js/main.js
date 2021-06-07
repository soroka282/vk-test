import {dataJSON} from './data/data.js';
import {createFormMarkup} from './components/form-view.js';

const RENDER_CONTAINER = 'h1';
const AFTEREND = 'afterend';
const CHECKBOX_BORDER = '1px solid grey';

//Рендер компонента формы в контейнер
const renderComponent = (dataJSON) => {
  const renderContainer = document.querySelector(RENDER_CONTAINER);
  const data = JSON.parse(dataJSON);
  return renderContainer.insertAdjacentHTML(AFTEREND, createFormMarkup(data));
}

renderComponent(dataJSON);

//Реализация ночной темы через навешивания необходимх классов
const buttonChange = document.querySelector('.form__change');
const formCheckboxInputs = document.querySelectorAll('.form__checkbox-input');

const toggleClass = (classElem, classElemAdd) => {
  document.querySelectorAll(classElem).
    forEach((item) => { return item.classList.toggle(classElemAdd) });
};

buttonChange.addEventListener('click', () => {
  document.querySelector('.form').classList.toggle('form--night');
  document.querySelector('.page__body').classList.toggle('page__body--night');
  toggleClass('.form__input', 'form__input--night');
  toggleClass('.form__select', 'form__select--night');
  toggleClass('.form__submit', 'form__submit--night');
  toggleClass('.form__textarea', 'form__textarea--night');

  buttonChange.querySelectorAll('svg')
    .forEach((item) => { item.classList.toggle('visually-hidden'); });
});

//Ставит фокус на псевдо-чекбоксы
formCheckboxInputs.forEach((inputs) => {

  return inputs.addEventListener('focus', (evt) => {
    const formPseudoCheckboxes = document.querySelectorAll('.form__checkbox-pseudo');

    formPseudoCheckboxes.forEach((checkbox) => {
      if (checkbox.getAttribute('for') === evt.target.id) {
        checkbox.style.border = CHECKBOX_BORDER;
      } else {
        checkbox.style.border = '';
      }
    });
  });
});
