//рендерит разметку чекбоксов в форму
const getMarkupCheck = (checkbox) => {

  if (checkbox.length === 0) {
    return '';
  }

  return checkbox.map((item) => {
    return (
      `<div class='form__checkbox'>
        <input class='form__checkbox-input' type='${item.type}' name='${item.name}' id='${item.id}' value='${item.id}' required>
        <label class='form__checkbox-pseudo' for='${item.id}' name='${item.name}'></label>
        <label class='form__checkbox-text' name='${item.name}' for='${item.id}'>${item.label}</label>
      </div>`
    );
  }).join(' ');
};

//рендерит разметку инпутов в форму
const getMarkupInput = (personalData) => {

  if (personalData.length === 0) {
    return '';
  }

  return personalData.map((item) => {
    return (
      `<div>
        <label for='${item.id}'>${item.label}</label>
        <input class='form__input' type='${item.type}' id='${item.id}' placeholder='${item.placeholder}' required>
      </div>
      `);
  }).join(' ');
};

//рендерит разметку поля для загрузки в форму
const getMarkupUploadFile = (MarkupUploadFile) => {

  if (MarkupUploadFile.length === 0) {
    return '';
  }

  return MarkupUploadFile.map((item) => {
    return (
      `<div>
        <label for='${item.id}'>${item.label}</label>
        <input class='form__upload-field' type='${item.type}' id='${item.id}' placeholder='${item.placeholder}' accept='${item.accept}'>
      </div>
      `);
  }).join(' ');
};

//рендерит разметку textarea в форму
const getMarkupTextarea = (textPlace) => {
  if (textPlace.length === 0) {
    return '';
  }

  return textPlace.map((item) => {
    return `<textarea class='form__textarea' placeholder='${item.placeholder}'></textarea>`;
  }).join(' ');
};

//рендерит разметку кнопок в форму
const getMarkupButton = (button) => {
  if (button.length === 0) {
    return '';
  }

  return button.map((item) => {
    return `<button class='form__button form__${item.type}' type='${item.type}'>${item.text}</button>`;
  }).join(' ');
};

//рендерит разметку селектов в форму
const getMarkupSelect = (statistics) => {
  if (statistics.length === 0) {
    return '';
  }

  return statistics.map((item) => {
    return (
      `<div>
      <label for='${item.id}'>${item.label}</label>
      <select class='form__select' id='${item.id}' name='${item.id}' required>
      <option selected disabled value=''>Выберите из списка...</option>
        ${item.values.map((value) => { return `<option value='${value}'>${value}</option>`;}).join('\n')}
      </select>
    </div>
    `);
  }).join(' ');
};

export {
  getMarkupCheck,
  getMarkupInput,
  getMarkupUploadFile,
  getMarkupSelect,
  getMarkupTextarea,
  getMarkupButton};
