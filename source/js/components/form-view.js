
import {
  getMarkupCheck,
  getMarkupInput,
  getMarkupUploadFile,
  getMarkupSelect
  } from '../render/render-elem.js';


//создает разметку на основе нашего JSON
export const createFormMarkup = (data) => {

  const {submit,
    personalData,
    statistics,
    textPlace,
    contactInformation,
    placeOfResidence,
    date,
    agreement,
    sex,
    uploadFiles} = data;

    if (submit.length === 0) {
      document.querySelector('.form__submit').disabled = true;
    }

    const isTextPlace = textPlace.length;
    const isPersonalData = personalData.length && statistics.length && textPlace.length && sex.length && date.length && uploadFiles.length;
    const isContactInfo = contactInformation.length && placeOfResidence.length && agreement.length;

  return `
      <form class='form' action=${submit.length ? submit[0].url : ''} method=${submit.length ? submit[0].type : ''} enctype='${submit.length ? submit[0].enctype : ''}'>
        <div class='form__wrap-title'>
          ${isPersonalData ? `<h2>Личные данные</h2>` : ''}
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
          `<textarea class='form__textarea' placeholder='${textPlace.length ? textPlace[0].placeholder : ''}'></textarea>` : ''}

        ${getMarkupUploadFile(uploadFiles) ?
          `<div class='form__upload-field-wrap'>
            ${getMarkupUploadFile(uploadFiles)}
          </div>` : ''}

        ${isContactInfo ? `<h3>Контактная информация</h3>` : ''}

        ${getMarkupSelect(placeOfResidence) ? `<div class='form__residence'>
          ${getMarkupSelect(placeOfResidence)}
        </div>` : ''}

        ${getMarkupInput(contactInformation)}

        ${getMarkupCheck(agreement)}
        <div>
          <button class='form__button form__submit' type='submit'>Отправить</button>
          <button class='form__button form__reset' type='reset'>Сбросить</button>
        </div>
      </form>
  `;
};
