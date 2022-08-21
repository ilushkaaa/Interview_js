// Доработать виджет, чтобы:
//  1. ярко подсвечивался выбранный элемент меню
//  2. слабо подсвечивалcя элемент меню, на которой наведен курсор мыши
//  3. последний пункт должен быть всегда не активным (не реагировать на клик и наведение мыши)

import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';

ReactDOM.render(
  <>
    <Widget />
  </>,
  document.getElementById('root')
);
