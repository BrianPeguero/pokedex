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
        } else {
            console.log(`${pokemon.name()} was not added to the party`)
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
}