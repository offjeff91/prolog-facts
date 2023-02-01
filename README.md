# prolog-facts
An npm package that take any simple Javascript object and represent it as a Prolog fact

##npm

https://www.npmjs.com/package/prolog-facts

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
