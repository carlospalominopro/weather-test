
# Weather - Technical test - Documentation

The following are the steps to be followed to execute the project locally

#### Nest js && Angular APP
##### Make sure you have Node.js, Nestjs and Angular installed.


## Installation

BACKEND

```bash
  $ git clone https://github.com/carlospalominopro/weather-test

  $ cd weather-test
  
  $ npm install -g @angular/cli
  $ npm install -g @nestjs/cli
  $ npm install

  /* Start backend main app, by-city microservice, next-5-days microservice */
  $ npm run start:development

```

FRONTEND

```bash
  /* Start frontend app */
  $ cd frontend
  $ npm install
  $ npm start
```

## API BACKEND - Reference

### Note : The use of POSTMAN is recommended, in root folder exists a file named test.postman_collection.json
-------------------------------------------------
#### 01 - Get weather by city

```http
  POST /search-weather
```


| Parameter | Type     | Description   | Example                    |
| :-------- | :------- | :-------------------------------- | :--------------------------------
| `city`      | `string` | **Required**. City/country name | 'Bogota' |
| `getNext5Days`      | `boolean` | Not required. true= Get city weather with next 5 days, false= Get city weather only  | false |

#### 02 - Get weather of the city and the next 5 days

```http
  POST /search-next-5-days
```

| Parameter | Type     | Description   | Example                    |
| :-------- | :------- | :-------------------------------- | :--------------------------------
| `city`      | `string` | **Required**. City/country name | 'Bogota' |

## Test

```bash

  $ npm run test

```

Author : Carlos Palomino - 2023