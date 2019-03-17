# Lexical Density Calculator
Takes a small block of text and calculates its lexical density value.

## Getting Started

- Install Node.js (this project uses 6.7.0), MongoDB and Postman.
- cd into directory

Install dependencies:

```
npm install
```

Seed the database:

```
node app/seed/seed.js
```

Run Eslint:

```
npx eslint yourdir/yourfile
```

This has been tested with Jest. To run the tests:

```
npm test
```


## To interact

This API has been tested using Postman.

<img width="1119" alt="Screenshot 2019-03-17 at 15 41 13" src="https://user-images.githubusercontent.com/41509062/54494279-5bad6b00-48d0-11e9-8fff-8cabdf4f901b.png">

If there are any numbers or punctuation makrs in the request, they will be removed:
<img width="1126" alt="Screenshot 2019-03-17 at 15 39 51" src="https://user-images.githubusercontent.com/41509062/54494280-5bad6b00-48d0-11e9-9fcd-413320ce85d1.png">

<img width="1123" alt="Screenshot 2019-03-17 at 15 39 39" src="https://user-images.githubusercontent.com/41509062/54494281-5bad6b00-48d0-11e9-87eb-6db00185a038.png">

## Interacting with the database

To get all non-lexical words:
GET http://localhost:2000/api/words

Add a new word:
POST http://localhost:2000/api/words

Delete a word by ID:
DELETE http://localhost:2000/api/words/id

Update a word:
PUT http://localhost:2000/api/words/id

## Adding to the database using Postman


## Versioning

1.0.0
