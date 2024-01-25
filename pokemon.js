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
            } else {
                console.log(`GO ${Pokemon}!!`);
                return this.storage
            }
        }        
        if(this.isEmpty()) {
            this.storage = Pokemon
            console.log(`You caught ${Pokemon} name`)
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
    constructor(belt){}
    catch(){

    }
    getPokemon(){

    
    }
}
module.exports = {Pokemon, Fire, Grass, Water, Normal, Charmander, Squirtle, Bulbasaur, Rattata,Pokeball}