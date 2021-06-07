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

export {dataJSON}
