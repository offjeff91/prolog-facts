# prolog-facts
A JavaScript function to convert objects to Prolog facts

## Installation
```
npm install prolog-facts
```

## Usage

```javascript
const prologFacts = require('prolog-facts');

const object = {
  name: 'Jairzinho',
  age: 30,
  club: 'Botafogo'
};

console.log(prologFacts(object));
```

## Output

```
name('Jairzinho').
age(30).
club('Botafogo').
```
