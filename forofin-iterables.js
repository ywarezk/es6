// for of loop will loop over iterable items

const arrayOfNumbers = [1,4,2,10,16];

for(let i of arrayOfNumbers){
    console.log(i);
}

// for in will loop over enumerable properties

arrayOfNumbers.message = 'hello world';

for(let i in arrayOfNumbers){
    console.log(i);
}

// you should favor using for of syntax cause the in can be unpredictable if
// someone is changing the prototype

// Iterable

// and iterable is an object that implements a next method
// the next method should return an object with value and done

const pokemonsCaught = {
    pokemons: [{name: 'pikachu', strength: 100}, {name: 'squirtle', strength: 80}, {name: 'balbasour', strength: 50}],
}

pokemonsCaught[Symbol.iterator] = function(){
    return {
        next: function(){
            if(!this._pokemonFiltered) {
                this._pokemonFiltered = [];
                for(let pokemon of pokemonsCaught.pokemons) {
                    let indexToPush = 0;
                    for(let pokemonPushed of this._pokemonFiltered) {
                        if (pokemonPushed.name !== pokemon.name && pokemonPushed.strength > pokemon.strength){
                            break;
                        }
                        indexToPush++
                    }
                    this._pokemonFiltered.splice(indexToPush,0,pokemon);
                }
                this._currentIndex = 0;
            }
            if (this._currentIndex === this._pokemonFiltered.length) {
                this._pokemonFiltered = null;
                return {done: true};
            } else {
                this._currentIndex++;
                return {value: this._pokemonFiltered[this._currentIndex - 1], done: false}
            }
        }
    }

}

for(let pokemon of pokemonsCaught){
    console.log(pokemon);
}