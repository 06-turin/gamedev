# Базовый слой
FROM node:14-alpine

# Копируем всё что нужно из локальной папки в образ
COPY ./app /usr/local/bomb

WORKDIR /usr/local/bomb

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm install
RUN npm run build

# При старте контейнер начнёт общаться через 5000 порт
EXPOSE 5000

# При старте контейнер выполнит эту команду – запустит наше приложение
CMD ["npm", "run", "start"]
