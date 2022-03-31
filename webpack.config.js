'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};

/* 
let path = require('path');  - техническая переменная трогать ее не нужно.

далее идет объект настроек со свойствами:

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};


mode: 'development', - режим в котором будет работать вебпэк. их есть 2 
  development - дла разработки
  production - когда уже  проект готов, то можно поставить в продакшн для более опимизированной работы

entry: './js/script.js', - файл в котором собироются все модули


output: { ---------------- файл выхода, всегда в виде объекта. конечный или итоговый файл
    filename: 'bundle.js',  ----------- его название 
    path: __dirname + '/js' ---- то место, куда все будет складываться ( __dirname  - это корень папки)
  },  







*/
