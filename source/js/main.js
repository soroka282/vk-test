import {dataJSON} from './data/data.js';
import Form from './components/form-view.js';

const RENDER_CONTAINER = 'h1';
const AFTEREND = 'afterend';

const renderContainer = document.querySelector(RENDER_CONTAINER);

//Рендер компонента формы в контейнер
const formView = new Form(dataJSON);
renderContainer.insertAdjacentHTML(AFTEREND, formView.getTemplate());
formView.init();
