import '../../css/form.css';

import {
  getMarkupCheck,
  getMarkupInput,
  getMarkupUploadFile,
  getMarkupSelect,
  getMarkupTextarea,
  getMarkupButton
} from '../render/render-elem.js';

const CHECKBOX_BORDER = '1px solid grey';


//создает разметку на основе нашего JSON
export const createFormTemplate = (data = null) => {

  const {submit = '',
    personalData  = '',
    statistics = '',
    textPlace = '',
    contactInformation = '',
    placeOfResidence = '',
    date = '',
    agreement = '',
    sex = '',
    uploadFiles = '',
    button = ''} = data;

  const isTextPlace = textPlace.length;
  const isPersonalData = personalData && statistics && textPlace && sex && date && uploadFiles;
  const isContactInfo = contactInformation && placeOfResidence && agreement;

  return `<form class='form' action=${submit ? submit[0].url : ''} method=${submit ? submit[0].type : ''} enctype='${submit ? submit[0].enctype : ''}'>
        <div class='form__wrap-title'>
          ${isPersonalData ? '<h2>Личные данные</h2>' : ''}
          <button class='form__button form__change' type='button'>
            <svg class='form__svg-night'>
              <use width="40" height="40" xlink:href='img/sprite/sprite.svg#moon'></use>
            </svg>
            <svg class='visually-hidden form__svg-day'>
              <use width="40" height="40" xlink:href='img/sprite/sprite.svg#sun'></use>
            </svg>
          </button>
        </div>

        ${getMarkupInput(personalData) ?
    `<div class='form__wrap-name'>
            ${getMarkupInput(personalData)}
          </div>
          <div class='form__wrap-age'>
            ${getMarkupInput(date)}
          </div>` : ''}

        ${getMarkupCheck(sex) ? `<div class='form__wrap-checkbox'>
        <p>Выбирите пол:</p>
        ${getMarkupCheck(sex)}
        </div>` : ''}

        ${getMarkupSelect(statistics)}

        ${isTextPlace ?
    getMarkupTextarea(textPlace) : ''}

        ${getMarkupUploadFile(uploadFiles) ?
    `<div class='form__upload-field-wrap'>
            ${getMarkupUploadFile(uploadFiles)}
          </div>` : ''}

        ${isContactInfo ? '<h3>Контактная информация</h3>' : ''}

        ${getMarkupSelect(placeOfResidence) ? `<div class='form__residence'>
          ${getMarkupSelect(placeOfResidence)}
        </div>` : ''}

        ${getMarkupInput(contactInformation)}

        ${getMarkupCheck(agreement)}
        <div>
          ${getMarkupButton(button)}
        </div>
      </form>
  `;
};


export default class Form {
  constructor(dataJSON) {
    this._dataJSON = dataJSON;
    this._data = null;

    this._focusPseudoCheckboxHandler = this._focusPseudoCheckboxHandler.bind(this);
    this._themeChangeHandler = this._themeChangeHandler.bind(this);
  }

  _getData() {
    return this._data = JSON.parse(this._dataJSON);
  }

  init() {
    if (!this._data.submit && this._data.button) {
      document.querySelector('.form__submit').disabled = true;
      throw Error('You must specify the attributes in the <form> tag');
    }

    this.getTemplate();
    this.setFocusPseudoCheckboxHandler();
    this.setThemeChangeHandler();
  }

  getTemplate() {
    return createFormTemplate(this._getData());
  }

  setFocusPseudoCheckboxHandler() {
    document.querySelectorAll('.form__checkbox-input')
      .forEach((inputs) => {
        return inputs.addEventListener('focus', this._focusPseudoCheckboxHandler);
      });
  }

  _focusPseudoCheckboxHandler(evt) {
    const formPseudoCheckboxes = document.querySelectorAll('.form__checkbox-pseudo');

    formPseudoCheckboxes.forEach((checkbox) => {
      if (checkbox.getAttribute('for') === evt.target.id) {
        checkbox.style.border = CHECKBOX_BORDER;
      } else {
        checkbox.style.border = '';
      }
    });
  }

  _toggleClass(classElem, classElemAdd) {
    document.querySelectorAll(classElem).
      forEach((item) => { return item.classList.toggle(classElemAdd); });
  }

  setThemeChangeHandler() {
    document.querySelector('.form__change').
      addEventListener('click', this._themeChangeHandler);
  }

  _themeChangeHandler() {
    document.querySelector('.form').classList.toggle('form--night');
    document.querySelector('.page__body').classList.toggle('page__body--night');
    this._toggleClass('.form__input', 'form__input--night');
    this._toggleClass('.form__select', 'form__select--night');
    this._toggleClass('.form__submit', 'form__submit--night');
    this._toggleClass('.form__textarea', 'form__textarea--night');

    document.querySelector('.form__change').querySelectorAll('svg')
      .forEach((item) => { item.classList.toggle('visually-hidden');
      });
  }
}
