const {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball} = require('./pokemon');

describe('Pokemon - variables', () => {
    test('Name variable should return a string', () => {
        const actual = new Pokemon('name')
        expect(typeof actual.name).toBe('string');
    });
    test('hitPoints variable should return a number', () => {
        const actual = new Pokemon('name', 10)
        expect(typeof actual.hitPoints).toBe('number');
    });
    test('attackDamage variable should return a number', () => {
        const actual = new Pokemon('name', 10, 5)
        expect(typeof actual.attackDamage).toBe('number');
    });
    test('moves variable should return a string', () => {
        const actual = new Pokemon('name', 10, 5,'tackle')
        expect(typeof actual.moves).toBe('string');
    });
});
describe('Pokemon - takeDamage', () => {
    test('Should return a number', () => {
        const actual = new Pokemon('name', 10, 5,'tackle')
        actual.takeDamage(10)
        expect(typeof actual.takeDamage()).toBe('number');
    });
    test('Return reduced hitPoints by attack number', () => {
        const actual = new Pokemon('name', 100, 5,'tackle')
        actual.takeDamage(10)
        expect(actual.hitPoints).toBe(90);
    });
});
describe('Pokemon - useMove', () => {
    test('Should return a number', () => {
        const actual = new Pokemon('name', 100, 5, 'tackle')
        expect(typeof actual.useMove()).toBe('number');
    });
    test('Return pokemons attack damage', () => {
        const actual = new Pokemon('name', 100, 5, 'tackle')
        expect(actual.useMove()).toBe(5);
    });
})
describe('Pokemon - hasFainted', () => {
    test('Should return a boolean', () => {
        const actual = new Pokemon('name', 100, 5, 'tackle')
        expect(typeof actual.hasFainted()).toBe('boolean');
    });
    test('Return true if pokemons hitpoint is 0 and has fainted', () => {
        const actual = new Pokemon('name', 0, 5, 'tackle')
        expect(actual.hasFainted()).toBe(true);
    });
    test('Return false if pokemons hitpoint is above 0 and has not fainted', () => {
        const actual = new Pokemon('name', 100, 5, 'tackle')
        expect(actual.hasFainted()).toBe(false);
    });
});
describe('Pokemon - subClass - Fire - isEffectiveAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Fire('name', 100, 5, 'tackle')
        const target = new Grass('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isEffectiveAgainst(target)).toBe('boolean');
    });
    test('Should return true if pokemon is effective against grass', () => {
        const ourPokemon = new Fire('name', 100, 5, 'tackle')
        const target = new Grass('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(true);
    });
    test('Should return false if pokemon is not effective against grass', () => {
        const ourPokemon = new Water('name', 100, 5, 'tackle')
        const target = new Grass('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(false);
    });
});
describe('Pokemon - subClass - Water - isEffectiveAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Water('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isEffectiveAgainst(target)).toBe('boolean');
    });
    test('Should return true if pokemon is effective against grass', () => {
        const ourPokemon = new Water('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(true);
    });
    test('Should return false if pokemon is not effective against grass', () => {
        const ourPokemon = new Water('name', 100, 5, 'tackle')
        const target = new Grass('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(false);
    });
});
describe('Pokemon - subClass - Grass - isEffectiveAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Water('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isEffectiveAgainst(target)).toBe('boolean');
    });
    test('Should return true if pokemon is effective against grass', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Water('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(true);
    });
    test('Should return false if pokemon is not effective against grass', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(false);
    });
});
describe('Pokemon - subClass - Normal - isEffectiveAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Normal('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isEffectiveAgainst(target)).toBe('boolean');
    });
    test('Should return false for normal pokemon', () => {
        const ourPokemon = new Normal('name', 100, 5, 'tackle')
        const target = new Normal('name', 100, 5, 'tackle')
        expect(ourPokemon.isEffectiveAgainst(target)).toBe(false);
    });
});
describe('Pokemon - subClass - Grass - isWeakAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Water('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isWeakAgainst(target)).toBe('boolean');
    });
    test('Should return true if pokemon is weak against grass', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(ourPokemon.isWeakAgainst(target)).toBe(true);
    });
    test('Should return false if pokemon is not weak against grass', () => {
        const ourPokemon = new Grass('name', 100, 5, 'tackle')
        const target = new Water('name', 100, 5, 'tackle')
        expect(ourPokemon.isWeakAgainst(target)).toBe(false);
    });
});
describe('Pokemon - subClass - Normal - isWeakAgainst', () => {
    test('Should return a boolean', () => {
        const ourPokemon = new Normal('name', 100, 5, 'tackle')
        const target = new Fire('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.isWeakAgainst(target)).toBe('boolean');
    });
    test('Should return false for normal pokemon', () => {
        const ourPokemon = new Normal('name', 100, 5, 'tackle')
        const target = new Normal('name', 100, 5, 'tackle')
        expect(ourPokemon.isWeakAgainst(target)).toBe(false);
    });
});
describe('Pokemon - Fire - Charmander - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Charmander('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Charmander', () => {
        const ourPokemon = new Charmander('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('ember');
    });
});
describe('Pokemon - Water - Squirtle - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Squirtle('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Charmander', () => {
        const ourPokemon = new Squirtle('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('water gun');
    });
});
describe('Pokemon - Grass - Bulbasaur - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Bulbasaur('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Charmander', () => {
        const ourPokemon = new Bulbasaur('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('vine whip');
    });
});
describe('Pokemon - Normal - Rattata - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Rattata('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Charmander', () => {
        const ourPokemon = new Rattata('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('tackle');
    });
});