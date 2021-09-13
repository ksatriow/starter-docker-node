# **Starter Docker NodeJs**

## **Tech**

- NodeJs
- ExpressJs
- Docker

## **How To Use It**

- Create dockerfile

  ```dockerfile
  FROM node:latest

  RUN mkdir -p /usr/src/app/
  WORKDIR /usr/src/app/

  COPY package.json .
  RUN npm install

  COPY . .

  EXPOSE 4000

  CMD npm start
  ...

  ```

- Build docker image

  ```sh
  docker build -t nodedocker:v1 .
  ...

  ```

- Run docker image

  ```sh
  docker container run -p 4000:80 nodedocker:v1
  ...
  ```
