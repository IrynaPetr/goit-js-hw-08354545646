// Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища
//   будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
//  данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями 
// email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для 
// этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const feedbackFormEl = document.querySelector('form.feedback-form');
const submitEl = document.querySelector('button');
const STORAGE_KAY = 'feedback-form-state'
