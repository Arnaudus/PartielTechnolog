FROM node:alpine
WORKDIR /app
COPY ../package.json /app
RUN npm install
RUN npm install express
RUN npm install socket.io
RUN npm install -g nodemon
COPY . /app
CMD nodemon PizzaTime.js
