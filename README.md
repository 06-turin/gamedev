# Игра Bomberman

![Logo](/logo.PNG)

## Где посмотреть:
Задеплоили на [**YandexCloud**](https://turin-bomberman-6.ya-praktikum.tech/)

## Доступные страницы:
1. Главная - /
2. Логин - /login
3. Регистрация - /registration
4. Форум - /forum
5. Игра - /game
6. Лидерборд - /leaderboard
7. Профиль - /profile
8. Ошибка - несуществующий роут

## Как запускать:
**В первую очередь в корень проекта положить dev.env с переменными окружения**
### DEV:
1. В корне запустить docker-compose up postgres pgadmin - поднимутся контейнеры с базой и ее админкой (если нет образов, то их надо сначала собрать docker-compose build postgres pgadmin)
2. В ./app запустить npm run dev (В другом терминале)

### PROD:
1. В корне запустить docker-compose build; docker-compose up;  
Собирает образы и поднимает 3 контейнера, с приложением (собранным в продакшн режиме), с базой и админкой базы.

## Команды (внутри ./app):
1. npm run dev - Собирает сервер, запускает его, а на сервере собирается клиент с HMR (в папку dist это не попадает)  
    1.1. npm run dev:webpack - Собирает сервер  
    1.2. npm run dev:server - Запускает сервер, собирает клиент с HMR (в папку dist это не попадает)  
2. npm run build - Собирает сервер и клиент в режиме production в папки dist и distServer
3. npm start - Запускает сервер из собранного бандла без hmr, клиент подтягивает из папки dist
4. npm run clean - Удаляет dist и distServer
5. npm run eslint:fix - запуск eslint с автофиксом
6. npm run stylelint:fix - запуск линтера стилей с автофиксом
7. npm run test - запуск тестов
8. *Для переключения на версию ноды из .nvmrc нужно запустить nvm use в корне проекта

## Инструкция по ручному деплою (для разработчиков):

1. Вы должны быть зарегистрированы как пользователь на ВМ в облаке.
  Кидайте мне ваш публичный SSH ключ - я создам вам пользователя ВМ и добавлю ключ в разрешенные, чтобы вы смогли заходить удаленно по ssh.
2. В файлах `/cloud/docker-publish.sh`, `/cloud/docker-reload.sh`. Поменяйте переменную `$USER` на вашего пользователя ВМ
3. Включите докер.
4. `cd app`
5. `npm run docker:publish`:
    - собирает локально все докер-образы
    - отправляет все докер-образы на удаленный репозиторий нашего ЯндексОблака с пометкой latest
    - обновляет образы на удаленном репозитории.
6. `npm run docker:reload` - останавливает текущие контейнеры на ВМ в облаке, запускает контейнеры заново.

Также эти скрипты можно запускать без npm: `bash cloud/docker-publish.sh`, `bash cloud/docker-reload.sh`

PS: `./cloud/docker-compose.yaml` - это шаблон для сборки на сервере. Там мы не собираем образы, а стягиваем из репозиториев. Этот файл я уже положил в ВМ в /var/local/, он вызывается скриптом docker-reload. Здесь я его положил, чтобы было понятно, что происходит на сервере. Локально он не запускается.

## Инструкция по автоматическому деплою (для разработчиков):

Автоматический деплой на виртуальную машину запускается каждый раз после мержа в `main` ветку.

## Соглашения по написанию кода:
1. Подключаем линтеры к своей IDE, чтобы автоформатирование работало у всех одинаково
2. Для описания пропсов и стейта компонентов используем типы (не интерфейсы), называем их `${componentName}State` и `${componentName}Props`
3. Всегда используем **именованные** экспорты и не используем дефолтные

## Наш гит флоу:
**main** - основная ветка. От нее отходят ветки спринтов (например ветка sprint5)  
**sprint5** - ветка спринта, от нее создаем ветки задач 5-го спринта  
**sprint5-build-marat5** - ветка задачи. В названии указываем спринт-ёмкое_имя_задачи-юзернейм  

Перед тем как делать пр в спринт обязательно делаем ребейс  
Чтобы смерджить в спринт нужно 2 аппрува  
Перед тем как влить ветку в спринт делаем сквош коммитов, чтобы у нас был один коммит на задачу  

## Локализация:
В папке `src/locales/${lang}` живут .json файлы с переводами строк. При добавлении новой строки нужно проверить нет ли ее в этих файлах, и если нет, то добавить. Пример того как получить строки есть на странице Форум.


## Макеты:
[Ссылка на макеты](https://www.figma.com/file/l7ObcbZiqRjKX5IREhn4QF/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%D1%8B-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B?node-id=0%3A1)
