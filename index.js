const objectToPrologFacts = (object) => {
  // Initialize an empty array to store the Prolog facts
  let prologFacts = [];

  // Iterate through the object properties
  for (const key in object) {
      // Check if the property name follows Prolog naming conventions
      if (!/^[a-z][a-zA-Z0-9_]*$/.test(key)) {
          throw new Error(`Invalid Prolog property name: ${key}`);
      }

      // Convert the key-value pair to a Prolog fact and add it to the array
      prologFacts.push(`${key}(${object[key]}).`);
  }

  // Return the array of Prolog facts
  return prologFacts;
};

module.exports = objectToPrologFacts;
