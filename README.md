# Проектная работа Mesto
## Макет https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
## ССылка на репозиторий https://github.com/nerozumime/mesto-project-ff


### Зависимости

1. npm install // npm 

2. npm i webpack --save-dev // чтобы подключить webpack 
3. npm i webpack-cli --save-dev // Для настройки webpack через терминал изобрели интерфейс — webpack CLI.  установит этот самый интерфейс 
4. npm i webpack-dev-server --save-dev // устанавливает локальный сервер 
5. npm run dev // Команда webpack serve запустит проект на локальном сервере по адресу localhost:8080. 

6. npm i @babel/core --save-dev // Когда проект собран, Babel уже не нужен. Чтобы установить Babel, установите пакет @babel/core:
7. npm i @babel/preset-env --save-dev // Чтобы не настраивать Babel вручную есть уже готовые наборы таких правил — пресеты. Самый распространённый из них — @babel/preset-env:
8. npm i core-js --save // флаг --save говорит, что пакет нужен в итоговой сборке для пользователя
9. npm i babel-loader --save-dev //  позволяет подключить Babel к Webpack

10. npm i html-webpack-plugin --save-dev // html-webpack-plugin учит «Вебпак» работать с html-файлами.
11. npm i clean-webpack-plugin --save-dev //CleanWebpackPlugin - плагин, который будет каждый раз при сборке проекта удалять содержимое папки dist.

12. npm i css-loader --save-dev // Пакет css-loader нужен для того, чтобы научить Webpack работать с определённым типом файлов — с CSS.
13. npm i mini-css-extract-plugin --save-dev // берёт много CSS-файлов и объединяет их в один.

14. npm i postcss-loader --save-dev // подключить PostCSS к «Вебпаку»
15. npm i autoprefixer --save-dev //  научит PostCSS добавлять вендорные префиксы
16. npm i cssnano --save-dev // cssnano займётся минификацией css-кода.
