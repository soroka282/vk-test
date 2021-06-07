/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/form-view.js":
/*!*******************************************!*\
  !*** ./source/js/components/form-view.js ***!
  \*******************************************/
/*! exports provided: createFormMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormMarkup", function() { return createFormMarkup; });
/* harmony import */ var _render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/render-elem.js */ "./source/js/render/render-elem.js");




//создает разметку на основе нашего JSON
const createFormMarkup = (data) => {

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

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupInput"])(personalData) ?
          `<div class='form__wrap-name'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupInput"])(personalData)}
          </div>
          <div class='form__wrap-age'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupInput"])(date)}
          </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupCheck"])(sex) ? `<div class='form__wrap-checkbox'>
        <p>Выбирите пол:</p>
        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupCheck"])(sex)}
        </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupSelect"])(statistics)}

        ${isTextPlace ?
          `<textarea class='form__textarea' placeholder='${textPlace.length ? textPlace[0].placeholder : ''}'></textarea>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupUploadFile"])(uploadFiles) ?
          `<div class='form__upload-field-wrap'>
            ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupUploadFile"])(uploadFiles)}
          </div>` : ''}

        ${isContactInfo ? `<h3>Контактная информация</h3>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupSelect"])(placeOfResidence) ? `<div class='form__residence'>
          ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupSelect"])(placeOfResidence)}
        </div>` : ''}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupInput"])(contactInformation)}

        ${Object(_render_render_elem_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupCheck"])(agreement)}
        <div>
          <button class='form__button form__submit' type='submit'>Отправить</button>
          <button class='form__button form__reset' type='reset'>Сбросить</button>
        </div>
      </form>
  `;
};


/***/ }),

/***/ "./source/js/data/data.js":
/*!********************************!*\
  !*** ./source/js/data/data.js ***!
  \********************************/
/*! exports provided: dataJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataJSON", function() { return dataJSON; });
const data = {
  'submit' : [
    {
      'url': 'www.example.com',
      'type': 'POST',
    },
  ],
  'personalData': [
    {
      'label': 'Фамилия',
      'type': 'text',
      'id': 'surname',
      'placeholder': 'Иванов'
    },
    {
      'label': 'Имя',
      'type': 'text',
      'id': 'name',
      'placeholder': 'Иван'
    },
    {
      'label': 'Отчество',
      'type': 'text',
      'id': 'patronymic',
      'placeholder': 'Иванович'
    },
  ],
  'sex' : [
    {
      'id': 'men',
      'type': 'radio',
      'label': 'Мужчина',
      'name' : 'sex'
    },
    {
      'id': 'women',
      'type': 'radio',
      'label': 'Женщина',
      'name' : 'sex'
    }
  ],
  'date' : [
    {
      'id': 'date',
      'label': 'Дата рождения',
      'placeholder': '',
      'type': 'date',
    },
    {
      'id': 'age',
      'label': 'Полный возраст',
      'placeholder': '18',
      'type': 'number',
    },
  ],
  'statistics' : [
    {
      'label': 'Семейное положение',
      'id': 'family__status',
      'values': [
        'Не замужем, не женат',
        'Замужем, женат',
        'Разведён, разведена',
        'Вдова, вдовец',
      ]
    },
    {
      'label': 'Образование',
      'id': 'education',
      'values': [
        'Высшее',
        'Среднее профессиональное',
        'Среднее (полное)',
        'Среднее',
      ]
    },
  ],
  'textPlace': [
    {
      'placeholder' : 'Расскажите о себе...',
    },
  ],
  'uploadFiles' : [
    {
      'id': 'upload',
      'label': '...или можете загрузить текстовый документ',
      'placeholder': '',
      'type': 'file',
      'accept' : '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
  ],
  'placeOfResidence' : [
    {
      'label': 'Город',
      'id': 'city',
      'values': [
        'Москва',
        'Казань',
        'Санкт-Петербург',
        'Волгоград',
        'Краснодар',
        'Сочи',
      ]
    },
  ],
  'contactInformation' : [
    {
      'label': 'Моб. телефон',
      'type': 'text',
      'id': 'phone',
      'placeholder': '89518998989'
    },
    {
      'label': 'Электронная почта',
      'type': 'text',
      'id': 'email',
      'placeholder': 'example@example.ru'
    },
  ],
  'agreement' : [
    {
      'id': 'agreement',
      'type': 'checkbox',
      'name' : 'agreement',
      'label': 'Я принимаю условия соглашения',
    },
  ],
}

const dataJSON = JSON.stringify(data);




/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data.js */ "./source/js/data/data.js");
/* harmony import */ var _components_form_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form-view.js */ "./source/js/components/form-view.js");



const RENDER_CONTAINER = 'h1';
const AFTEREND = 'afterend';
const CHECKBOX_BORDER = '1px solid grey';

//Рендер компонента формы в контейнер
const renderComponent = (dataJSON) => {
  const renderContainer = document.querySelector(RENDER_CONTAINER);
  const data = JSON.parse(dataJSON);
  return renderContainer.insertAdjacentHTML(AFTEREND, Object(_components_form_view_js__WEBPACK_IMPORTED_MODULE_1__["createFormMarkup"])(data));
}

renderComponent(_data_data_js__WEBPACK_IMPORTED_MODULE_0__["dataJSON"]);

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


/***/ }),

/***/ "./source/js/render/render-elem.js":
/*!*****************************************!*\
  !*** ./source/js/render/render-elem.js ***!
  \*****************************************/
/*! exports provided: getMarkupCheck, getMarkupInput, getMarkupUploadFile, getMarkupSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupCheck", function() { return getMarkupCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupInput", function() { return getMarkupInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupUploadFile", function() { return getMarkupUploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupSelect", function() { return getMarkupSelect; });
//рендерит разметку чекбоксов в форму
const getMarkupCheck = (checkbox) => {

  if (checkbox.length === 0) {
    return '';
  };

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
  };

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
  };

  return MarkupUploadFile.map((item) => {
    return (
      `<div>
        <label for='${item.id}'>${item.label}</label>
        <input class='form__upload-field' type='${item.type}' id='${item.id}' placeholder='${item.placeholder}' accept='${item.accept}'>
      </div>
      `);
  }).join(' ');
};

//рендерит разметку селектов в форму
const getMarkupSelect = (statistics) => {

  if (statistics.length === 0) {
    return '';
  };

  return statistics.map((item) => {
    return (
    `<div>
      <label for='${item.id}'>${item.label}</label>
      <select class='form__select' id='${item.label}' name='${item.id}' required>
      <option selected disabled value=''>Выберите из списка...</option>
        ${item.values.map((value) => { return `<option value='${value}'>${value}</option>` }).join('\n')}
      </select>
    </div>
    `);
  }).join(' ');
};




/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map