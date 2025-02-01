# Проектная работа Mesto
## Макет https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
## ССылка на репозиторий https://github.com/nerozumime/mesto-project-ff


### Зависимости

npm install // npm 

npm i webpack --save-dev // чтобы подключить webpack 
npm i webpack-cli --save-dev // Для настройки webpack через терминал изобрели интерфейс — webpack CLI.  установит этот самый интерфейс 
npm i webpack-dev-server --save-dev // устанавливает локальный сервер 
npm run dev // Команда webpack serve запустит проект на локальном сервере по адресу localhost:8080. 

npm i @babel/core --save-dev // Когда проект собран, Babel уже не нужен. Чтобы установить Babel, установите пакет @babel/core:
npm i @babel/preset-env --save-dev // Чтобы не настраивать Babel вручную есть уже готовые наборы таких правил — пресеты. Самый распространённый из них — @babel/preset-env:
npm i core-js --save // флаг --save говорит, что пакет нужен в итоговой сборке для пользователя
npm i babel-loader --save-dev //  позволяет подключить Babel к Webpack

npm i html-webpack-plugin --save-dev // html-webpack-plugin учит «Вебпак» работать с html-файлами.
npm i clean-webpack-plugin --save-dev //CleanWebpackPlugin - плагин, который будет каждый раз при сборке проекта удалять содержимое папки dist.

npm i css-loader --save-dev // Пакет css-loader нужен для того, чтобы научить Webpack работать с определённым типом файлов — с CSS.
npm i mini-css-extract-plugin --save-dev // берёт много CSS-файлов и объединяет их в один.

npm i postcss-loader --save-dev // подключить PostCSS к «Вебпаку»
npm i autoprefixer --save-dev //  научит PostCSS добавлять вендорные префиксы
npm i cssnano --save-dev // cssnano займётся минификацией css-кода.
