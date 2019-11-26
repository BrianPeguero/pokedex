class Trainer {
    constructor() {
        this.name = ""

        this.party = []
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getParty() {
        return this.party
    }

    getTheEntireParty() {
        return this.party
    }

    getAPokemonFromParty(index) {
        return this.party[index]
    }

    addPokemonToParty(pokemon) {
        if (this.party.length < 6) {
            this.party.push(pokemon)
            console.log(`${pokemon.getName()} was added to the party`)
        } else {
            console.log(`Party is full`)
        }
    }

    removePokemonFromParty(index) {
        let tempList = []
        for (let i = 0; i < this.party.length; i++) {
            if (i != index) {
                tempList.push(this.party[i])
            }
        }

        this.party = tempList
    }

    all() {
        return this.party
    }

    get(name) {
        for(let i = 0; i < this.party.length; i++) {
            if(this.party[i].name === name) {
                return this.party[i]
            }
        }
    }
}