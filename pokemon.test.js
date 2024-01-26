const {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball, Trainer} = require('./pokemon');

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
describe('isEmpty should return boolean value', () => {
    test('isEmpty should return boolean value', () => {
    
        const ourPokeball = new Pokeball()
        expect(typeof ourPokeball.isEmpty()).toBe('boolean')
    }) 
    test('isEmpty should return true when storage is empty', () => {
        const ourPokeball = new Pokeball()
        expect(ourPokeball.isEmpty()).toBe(true)
    })
    test('isEmpty should return false when storage has pokemon', () => {
        const ourPokeball = new Pokeball()
        ourPokeball.storage[0] = 'string'
        expect(ourPokeball.isEmpty()).toBe(false)
    })
    })  
})
    describe('add pokemon to storage if isEmpty is true', () => {
        test('should add Pokemon to storage object when isEmpty is true', () => {
        const ourPokeball = new Pokeball()
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle')
        const consoleSpy = jest.spyOn(console,'log')
        ourPokeball.throw(pokemon1)
         expect(ourPokeball.storage).toBe(pokemon1)
         expect(consoleSpy).toHaveBeenCalledWith('You caught Charmander')
        }) 

    describe('throw should add pokemon to storage if isEmpty is true', () => {
        test('pokemon should not be added to storage if isEmpty is false', () => {
            const ourPokeball = new Pokeball()
            ourPokeball.storage= 'string'
            ourPokeball.throw('string')
         expect(ourPokeball.storage).toBe('string')
        }) 
    })
    test('should return pokemon if there is no argumanet and this isEmpty is false', () => {
        const ourPokeball = new Pokeball()
        const consoleSpy = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        ourPokeball.storage = pokemon1
     expect(ourPokeball.throw()).toBe(pokemon1)
     expect(consoleSpy).toHaveBeenCalledWith(`GO Charmander!!`)

    });
    test('should return pokemon if there is no argumanet and this isEmpty is true', () => {
        const ourPokeball = new Pokeball()
        const consoleSpy = jest.spyOn(console,'log')
        ourPokeball.throw()
     expect(consoleSpy).toHaveBeenCalledWith('Pokeball is empty')
    });
    describe('conatins should log empty if isEmpty is true and pokemon name if isEmpty is false', () => {
        test('should log empty if isEmpty is true', () => {
            const ourPokeball = new Pokeball() 
            const consoleSpy = jest.spyOn(console,'log') 
            ourPokeball.contains()
         expect(consoleSpy).toHaveBeenCalledWith('Empty')
        }) 
        test('should log return pokemon if isEmpty is false', () => {
            const ourPokeball = new Pokeball() 
            ourPokeball.contains()
            ourPokeball.storage = 'name'
         expect(ourPokeball.contains()).toBe('name')
        }) 
    })
});
describe('Trainer - Catch', () => {
    test('Should return array when no pokeballs inside', () => {
        const ourTrainer = new Trainer()
        expect(ourTrainer.belt).toEqual([]);
    });
    test('should return an array', () => {
        const ourTrainer = new Trainer()
        expect(typeof ourTrainer.belt).toEqual('object');
    });
    test('Should return Caught pokemon in Pokeball storage', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander')
        ourTrainer.catch(pokemon1)
        expect(ourTrainer.belt).toEqual([{'storage':pokemon1}])
    });
    test('Should return Full Pokeball to belt', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander')
        ourTrainer.catch(pokemon1)
        expect(ourTrainer.belt[0]).toEqual({'storage':pokemon1})
    });
    test('Should return Belt when 2 pokemon are caught', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander')
        const pokemon2 = new Pokemon('Bulbasaur')
        const pokemon3 = new Pokemon('Squirtle')
        ourTrainer.catch(pokemon1)
        ourTrainer.catch(pokemon2)
        expect(ourTrainer.belt).toEqual([{'storage':pokemon1},{'storage':pokemon2}])
        expect(ourTrainer.belt.length).toEqual(2)
    });
    test('Should return belt is full when 6 pokemon are in the belt', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander')
        const pokemon2 = new Pokemon('Bulbasaur')
        const pokemon3 = new Pokemon('Squirtle')
        const pokemon4 = new Pokemon('Charmander')
        const pokemon5 = new Pokemon('Bulbasaur')
        const pokemon6 = new Pokemon('Squirtle')
        const pokemon7 = new Pokemon('Squirtle')
        ourTrainer.catch(pokemon1)
        ourTrainer.catch(pokemon2)
        ourTrainer.catch(pokemon3)
        ourTrainer.catch(pokemon4)
        ourTrainer.catch(pokemon5)
        ourTrainer.catch(pokemon6)
        ourTrainer.catch(pokemon7)
        expect(ourTrainer.belt).toEqual([{'storage':pokemon1},{'storage':pokemon2},{'storage':pokemon3},{'storage':pokemon4},{'storage':pokemon5},{'storage':pokemon6}]);
    });
});
xdescribe('Trainer - getPokemon', () => {
    test('Should return an object', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        ourTrainer.catch(pokemon1)
        expect(ourTrainer.getPokemon(pokemon1)).toEqual(pokemon1);
    });
});
