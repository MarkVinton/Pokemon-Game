const {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball, Trainer, Battle} = require('./pokemon');

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
    test('Returns correct move for Squirtle', () => {
        const ourPokemon = new Squirtle('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('water gun');
    });
});
describe('Pokemon - Grass - Bulbasaur - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Bulbasaur('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Bulbasaur', () => {
        const ourPokemon = new Bulbasaur('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('vine whip');
    });
});
describe('Pokemon - Normal - Rattata - moves', () => {
    test('Returns a string', () => {
        const ourPokemon = new Rattata('name', 100, 5, 'tackle')
        expect(typeof ourPokemon.moves).toBe('string');
    });
    test('Returns correct move for Rattata', () => {
        const ourPokemon = new Rattata('name', 100, 5, 'tackle')
        expect(ourPokemon.moves).toBe('tackle');
    }); 
})
describe('Pokeball - isEmptty', () => {
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
describe('PokeBall - throw throw should add pokemon to storage if isEmpty is true', () => {
    test('should add Pokemon to storage object when isEmpty is true', () => {
        const ourPokeball = new Pokeball()
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle')
        const consoleSpy = jest.spyOn(console,'log')
        ourPokeball.throw(pokemon1)
         expect(ourPokeball.storage).toBe(pokemon1)
         expect(consoleSpy).toHaveBeenCalledWith('You caught Charmander')
        }) 
    test('pokemon should not be added to storage if isEmpty is false', () => {
            const ourPokeball = new Pokeball()
            ourPokeball.storage= 'string'
            ourPokeball.throw('string')
         expect(ourPokeball.storage).toBe('string')
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
});
describe('Pokeball - contains - conatins should log empty if isEmpty is true and pokemon name if isEmpty is false', () => {
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
describe('Trainer - getPokemon', () => {
    test('Should return an object', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        ourTrainer.catch(pokemon1)
        expect(typeof ourTrainer.getPokemon('Charmander')).toBe('object');
    }); 
    test('should return pokemon if pokemon exists in belt', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        ourTrainer.catch(pokemon1) 
        expect(ourTrainer.getPokemon('Charmander')).toEqual(pokemon1);
    });
    test('should not return pokemon if pokemon is not in belt ', () => {
        const ourTrainer = new Trainer()
        const consoleSpy = jest.spyOn(console,'log')
        ourTrainer.getPokemon('Charmander')
    
         expect(consoleSpy).toHaveBeenCalledWith('This pokemon is not in your belt');
        }); 
    test('should not return pokemon when different pokemon is in belt', () => {
        const ourTrainer = new Trainer()
        const pokemon1 = new Pokemon('Squirtle', 10, 5,'tackle','fire')
        const consoleSpy = jest.spyOn(console,'log')
        ourTrainer.getPokemon('Charmander')
        expect(consoleSpy).toHaveBeenCalledWith('This pokemon is not in your belt')
    }); 
});
describe('Battle - effectiveness - should multiply attack damage depending on pokemons strength', () => {
       test('should multiply fire pokemon damage by 1.25 against grass pokemon', () => {
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass') 
        const ourBattle = new Battle()
        
        expect(ourBattle.strength(pokemon1,pokemon2)).toEqual(1.25)
        
        })
        test('should multiply grass pokemon damage by 1.25 against water pokemon', () => {
            const pokemon1 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass')
            const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
            const ourBattle = new Battle()
            
            expect(ourBattle.strength(pokemon1,pokemon2)).toEqual(1.25)
    }) 
    test('should not multiply normal pokemon damage against any pokemon', () => {
        const pokemon1 = new Pokemon('Ratata', 10, 5,'tackle','normal')
        const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
        const ourBattle = new Battle()
        
        expect(ourBattle.strength(pokemon1,pokemon2)).toEqual(1)
}) 
test('should not multiply normal pokemon damage against any pokemon', () => {
    const pokemon1 = new Pokemon('Ratata', 10, 5,'tackle','normal')
    const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
    const ourBattle = new Battle()
    
    expect(ourBattle.strength(pokemon2,pokemon1)).toEqual(1)
}) })
describe('Battle - Fight - Should fight pokemon', () => {
    test('should remove attacker attack damage from defender HP', () => {
        const consoleSpy1 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Ratata', 10, 5,'tackle','normal')
        const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy1).toHaveBeenCalledWith('Ratata hit Squirtle and took 5')
    }) 
    test('should remove attacker attack damage from defender HP', () => {
        const consoleSpy2 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass')
        const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy2).toHaveBeenCalledWith('Bulbasaur hit Squirtle and took 6.25 it was Very effective')
    }) 
    test('should remove attacker attack damage from defender HP', () => {
        const consoleSpy3 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        const pokemon2 = new Pokemon('Squirtle', 10, 5,'tackle','water') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy3).toHaveBeenCalledWith('Charmander hit Squirtle and took 3.75 it was Not very effective')
    }) 
    test('should remove attacker attack damage from defender HP', () => {
        const consoleSpy4 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy4).toHaveBeenCalledWith('Charmander hit Bulbasaur and took 6.25 it was Very effective')
    })  
    test('should remove attacker attack damage from defender HP', () => {
        const consoleSpy4 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 10, 5,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy4).toHaveBeenCalledWith('Charmander hit Bulbasaur and took 6.25 it was Very effective')
    })  
    test('should log has fainted if defender HP less than or = 0', () => {
        const consoleSpy4 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 10, 10,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 10, 5,'tackle','grass') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy4).toHaveBeenCalledWith('Bulbasaur has fainted')
    })  
    test('fight should keep going until defender faints', () => {
        const consoleSpy4 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 20, 10,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 20, 5,'tackle','grass') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy4).toHaveBeenCalledWith('Bulbasaur has fainted')
    })  
    test('fight should keep going until attacker faints', () => {
        const consoleSpy4 = jest.spyOn(console,'log')
        const pokemon1 = new Pokemon('Charmander', 20, 10,'tackle','fire')
        const pokemon2 = new Pokemon('Bulbasaur', 200, 5,'tackle','grass') 
        const ourBattle = new Battle() 
        ourBattle.fight(pokemon1,pokemon2)
        expect(consoleSpy4).toHaveBeenCalledWith('Charmander has fainted')
    })  

})
    

