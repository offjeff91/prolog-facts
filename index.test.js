const objectToPrologFacts = require('./index');

describe('objectToPrologFacts', () => {
    it('should convert object properties to Prolog facts', () => {
        const object = {
            name: 'John Doe',
            age: 30,
            job: 'Developer',
        };

        const prologFacts = objectToPrologFacts(object);

        expect(prologFacts).toEqual([
            'name(John Doe).',
            'age(30).',
            'job(Developer).',
        ]);
    });

    it('should throw an error for invalid Prolog property names', () => {
        const object = {
            'first name': 'John',
            'age': 30,
        };

        expect(() => {
            objectToPrologFacts(object);
        }).toThrowError('Invalid Prolog property name: first name');
    });
});
