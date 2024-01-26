class Pokemon {
    constructor(name, hitPoints, attackDamage, moves = 'tackle', type){
        this.name = name
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.moves = moves
        this.type = type
    }
    takeDamage(attack) {
      return this.hitPoints -= attack;        
    }
    useMove(){
        console.log(`${this.name} use ${this.name}'s move`);
        return this.attackDamage
    }
    hasFainted(){
        if (this.hitPoints <= 0) {
            return true
        }else{
            return false
        }
    }
}
class Fire extends Pokemon{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
        this.type = 'fire'
    }
    isEffectiveAgainst(Pokemon){
        if(Pokemon.type === 'grass'){
            return true
        }else{
            return false
        }
    }
    isWeakAgainst(Pokemon){
        if(Pokemon.type === 'water'){
            return true
        }else{
            return false
        }
    }
}
class Grass extends Pokemon{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
        this.type = 'grass'
    }
    isEffectiveAgainst(target){
        if(target.type === 'water'){
            return true
        }else{
            return false
        }
    }
    isWeakAgainst(Pokemon){
        if(Pokemon.type === 'fire'){
            return true
        }else{
            return false
        }
    }
}
class Water extends Pokemon{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
        this.type = 'water'
    }
    isEffectiveAgainst(target){
        if(target.type === 'fire'){
            return true
        }else{
            return false
        }
    }
    isWeakAgainst(Pokemon){
        if(Pokemon.type === 'grass'){
            return true
        }else{
            return false
        }
    }
}
class Normal extends Pokemon{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
        this.type = 'normal'
    }
    isEffectiveAgainst(target){
        return false
    }
    isWeakAgainst(Pokemon){
        return false
}
}
class Charmander extends Fire{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
    this.moves = 'ember'
    }
}
class Squirtle extends Water{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
    this.moves = 'water gun'
    }
}
class Bulbasaur extends Grass{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
    this.moves = 'vine whip'
    }
}
class Rattata extends Normal{
    constructor(name, hitPoints, attackDamage, moves = 'tackle'){
        super(name, hitPoints, attackDamage, moves = 'tackle')
    this.moves = 'tackle'
    }
}
class Pokeball{
    constructor(){
        this.storage = {}
    }

    isEmpty(){ 
        if(Object.keys(this.storage).length === 0) {
        return true 
    } else {
        return false
    } 
}
    
    throw(Pokemon){ 
        if(!Pokemon) {
            if(this.isEmpty()) {
                console.log('Pokeball is empty');
            } else if (!this.isEmpty()){
                console.log(`GO ${this.storage.name}!!`);
                return this.storage
            }
        }        
        if(this.isEmpty() && (Pokemon)) {
            const caughtPokemon = Pokemon
            this.storage = caughtPokemon
            console.log(`You caught ${this.storage.name}`)
            return this.storage
        }  else {
            console.log('Pokeball is full')
        } 
        
    }
    
    contains(){ 
    if(this.isEmpty()) {
        console.log('Empty')
    } else {
        return this.storage
    }

    }
} 

class Trainer {
    constructor(){
        this.belt = []
    }
    catch(Pokemon){
        if (this.belt.length < 6){
            const newPokeball = new Pokeball()
            newPokeball.throw(Pokemon)
            this.belt.push(newPokeball)
        }else if(this.belt.length === 6){
            console.log('Belt is Full!')
        }
    }
    getPokemon(ourPokemon){ 
        
        for(let i = 0; i < this.belt.length; i++){
            const pokeBelt = this.belt[i] 
            
            if(ourPokemon === pokeBelt.storage.name){
            return this.belt[i].throw()
            }
        } 
        console.log('This pokemon is not in your belt')
    }
    
} 

class Battle {
    constructor() {}
    fight (attacker, defender) {  
        const damage = attacker.attackDamage * this.strength(attacker,defender)
        //let gameover = false
        defender.hitPoints -= damage
        let effective = 'Very effective'
        if(this.strength(attacker,defender) < 1) {
             effective = 'Not very effective'
             
            console.log(`${attacker.name} hit ${defender.name} and took ${damage} it was ${effective}`)
        } else if (this.strength(attacker,defender) === 1) {
    
            console.log(`${attacker.name} hit ${defender.name} and took ${damage}`)
        } else {
            console.log(`${attacker.name} hit ${defender.name} and took ${damage} it was ${effective}`)
        } 
        
        if(defender.hitPoints <= 0) {
            console.log(`${defender.name} has fainted`) 
            //gameover = true
        } else {
            this.fight(defender,attacker) 
            //gameover = false
        }
        //console.log(`${defender} has fainted`)

    } 
    strength(pokemon1, pokemon2) {
        const pokeType = pokemon1.type 
        const pokeType2 = pokemon2.type
        
        const effectiveness = {
        'fire':{'grass': 1.25, 'water':0.75},
        'grass':{'water': 1.25, 'fire':0.75},
        'water':{'fire': 1.25, 'grass':0.75},
        'normal':{'fire': 1, 'water':1, 'grass':1}
        
        }
        const multiplier = effectiveness[pokeType][pokeType2] || 1
        return multiplier
        }
  turn (attacker,defender) {
   return defender.hitPoints -= this.attack.attackDamage * this.multiplier
  }
  

    
}
module.exports = {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball, Trainer, Battle}