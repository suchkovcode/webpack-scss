# Webpack - моя сборка

> Используется Webpack 5.74.0

## Возможности

-  Компонентый подход к работе: структура файлов реализована компонентно
-  Использование Css-препроцессора Sсss
-  Оптимизиация итоговых HTML и CSS файлов
-  Автоматическое форматирования стиля кода по заданым настройкам
-  Контроль качества кода, проверка его на синтаксические и стилистические ошибки
-  Мастабируемые и гибкие для кастомизации конфигурации с сборкой 
-  Анализ вашего бандла с помощью пакета webpack-bundle-analyzer
-  Использование полифила Babel для поддержки старых браузеров при использовании современного синтаксиса ES6 в javaScript
-  Проверка js-кода на наличие ошибок линтером Eslint
-  Конвертация изображений в современный веб-формат webp
-  Стартовый шаблон для быстрого работы

## Требования
Для работы сборки вам понадобится скачать и установить:

- [Node.js](https://nodejs.org/en/) (требуемая версия Node >= 14.0)
- [Webpack 5](https://webpack.js.org/)
- [Git](https://git-scm.com/downloads) Также установите систему контроля версии. Для работы сборки Git не обязателен, но для удобства установки и дальнейшей разработки лучше все же установить.

## Установка и запуск

Для работы сборки вам понадобится скачать и установить [node.js](https://nodejs.org).

Также установите систему контроля версии [Git](https://git-scm.com/downloads). Для работы сборки Git не обязателен, но для удобства установки и дальнейшей разработки лучше все же установить.

Для установки (клонирования репозитория) в текущую папку из консоли введите команду: `git clone https://github.com/suchkovcode/webpack.git .`

> Все команды пишутся от корня проекта!
> После того как все исходники будут скачаны из удаленного репозитория, введите в консоли команду `npm install` для установки проекта. Все зависимости установятся автоматически.

Во избежании всевозможных ошибок в проекте установлен webpaсл-cli локально.

После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку **dist** корневой директории): <br>
`start` - базовая команда, которая запускает сборку для разработки, используя webpack-dev-serve  

## Файловая структура

**Вся файловая структура генерируется автоматически. Руками ничего создавать не нужно!**  
Сборщик имеет следующую файловую структуру:

```
├── webpack.config.js              # Конфиг сборщика
├── .gitignore                     # gitignore сборщика
├── .eslintrc.json                 # eslintrc конфигурации(по умолчанию пустой)
├── .eslintignore                  # eslintignore сборщика
├── .stylelintrc.json              # Файл конфигурации стайлинта
├── .stylelintignore               # Файл игнора стайлинта
├── .prettierrc.json               # Файл конфигурации форматера кода prettier
├── .prettierignore                # Файл игнорирования директорий и файлов для prettier
├── package.json                   # Основные зависимости
└── src                            # Исходная папка проекта
      ├───assets                   # Папка исзожных статичекий файлов
      │   ├───data                 # Папка для данных
      │   ├───fonts                # Исходные шрифты
      │   ├───img                  # Все исходные крартинки
      │   │   ├──png               # Папка для png картинок
      │   │   ├──svg               # Папка для svg картинок
      │   │   └──jpg               # Папка для jpg картинок
      │   ├───js                   # Глобальные функции и классы
      │   └───styles               # Глобальные стили на весь проект
      ├───components               # Папка с компонентами в котором стили и скрипты
      ├───index.html               # Индексный файл
      ├───app.js                   # Входной файл всех модулей
      └───app.scss                 # Главный файл стилей
```

## npm-скрипты

Вы можете вызывать webpack-скрипты через npm.

`npm start` - запускает сборку проекта в режиме разработки в папку **dist**, с запуском сервера.

`npm run build:dev` - запускает просто сборку в папку **dist**, без запуска сервера.

`npm run build:prod` - запускает сборку продакшен проекта в папку **dist**, с минификацией файлов и изображений, а также разделения css в отдельный файл.

`npm run test:check` - запускает проверку исходного кода на ошибки через Prettier, ESlin и Stylelint для в папке **src**

`npm run test:fix` - запускает исправление исходного кода на ошибки через Prettier, ESlin и Stylelint для в папке **src**



## Подключенные плагины

> Используется последнии версии плагинов

```
cross-env                                     # 

webpack                                       #  
webpack-cli                                   #   
webpack-dev-server                            # 

babel-loader                                  # 
css-loader                                    # 
sass-loader                                   # 
style-loader                                  # 
html-loader                                   #  
postcss-loader                                # 

html-webpack-plugin                           # 
mini-css-extract-plugin                       # 
favicons-webpack-plugin                       # 
webpack-bundle-analyzer                       # 
duplicate-package-checker-webpack-plugin      # 
image-minimizer-webpack-plugin                # 
 
imagemin                                      #
imagemin-gifsicle                             #
imagemin-mozjpeg                              #
imagemin-jpegtran                             #
imagemin-pngquant                             #
imagemin-svgo                                 #

sass                                          # 
prettier                                      # 
favicons                                      # 

postcss                                       # 
postcss-sort-media-queries                    # 
postcss-mq-keyframes                          # 
autoprefixer                                  # 
postcss-100vh-fix                             #
postcss-focus                                 #

@babel/core                                   # 
@babel/cli                                    # 
@babel/preset-env                             # 

stylelint                                     # 
stylelint-config-prettier-scss                # 
stylelint-config-standard-scss                # 
stylelint-order                               #

eslint                                        # 
eslint-plugin-import                          # 
eslint-plugin-prettier                        # 
eslint-config-prettier                        # 
```

## Изображения

Изображения в данном сборке автоматически конвертируются в веб-формат webp.


## :yellow_heart: Нравится сборка?
Сообщайте мне о [багах](https://github.com/suchkovcode/webpack/issues), ставьте звёздочку в правом верхнем углу.

## Заключение

Спасибо всем, кто использует сборку! Если вы заметили какую-либо ошибку, пришлите пожалуйста ишью с подробным описанием проблемы, я все смотрю и постараюсь решить. Спасибо!

## Лицензия

[MIT](./LICENSE) 

Copyright (c) 2022, [Nikita Suchkov](https://github.com/suchkovcode/)
