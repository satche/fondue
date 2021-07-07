# Fondue

**Front-end Development Utilities and Environement**

![GitHub](https://img.shields.io/github/license/satche/fondue)

## What is it ?

Fondue provides tools to help developere quickly create front-end projects.

## Getting started

### Installation

```shell
$ git clone https://github.com/satche/fondue.git
$ npm install
```

### Configuration

Duplicate `.env.example` and `bs-config.js.example` files and edit them to fit your needs.

### Usage

-  `npm start` – Run webpack in development mode and launch a [browser-sync](#bs) server
-  `npm prod` - Build files from webpack
-  `docker-compose up --build -d` – Run the [docker images](#docker)

Files are served in the `dist` folder.

## Features

### <a name="docker"></a> [Docker](https://www.docker.com/)

You can use Docker to launch npm scripts and a web server with database

**Images**

-  [nginx](https://hub.docker.com/_/nginx)
-  [php](https://hub.docker.com/_/php)
-  [mysql](https://hub.docker.com/_/mysql)
-  [phpmyadmin](https://hub.docker.com/r/phpmyadmin/phpmyadmin)
-  [node](https://hub.docker.com/_/node)

### [Webpack](https://webpack.js.org/)

Webpack configuration can be found in `webpack.config.js`

### <a name="bs"></a> [Browser-sync](https://www.browsersync.io/)

Provide features like browsers/devices synchronisation and auto-refreshing.

-  UI: [localhost:3001](http://localhost:3001)
-  Config file: duplicate `bs-config.js.example` to `bs-config.js`

If you want to use browser-sync inside docker container, make sure to edit this part of the config file:

```
proxy: "nginx:3000/",
server: false
```

### Other

-  [.editorconfig](https://editorconfig.org/) – Helps maintain consistent coding styles

## About

### [License](LICENSE)

This project is licensed under the terms of [MIT license](https://choosealicense.com/licenses/mit/).

### Author
