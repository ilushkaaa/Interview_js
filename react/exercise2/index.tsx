// Написать виджет, который берет данные из api https://catfact.ninja/fact и выводит их на страницу в заданный элемент.
// Обновление должно происходить через заданный промежуток времени.

import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from './Widget';

ReactDOM.render(
  <div className="widget_root">
    <Widget />
  </div>,
  document.getElementById('root')
);
