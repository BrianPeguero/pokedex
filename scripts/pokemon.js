class Pokemon {
    constructor () {
        this.name = ""
        this.description = ""
        
        this.numb = 0

        this.weight = 0
        this.height = 0

        this.stats = {
            "hp": 0,
            "attack": 0,
            "defense": 0,
            "special-defense": 0,
            "special-attack":0,
            "speed": 0
        }

        this.img = ""

        this.abilities = []

        this.type =[]
    }

    //name
    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    //description
    getDescription() {
        return this.description
    }

    setDescription(description) {
        this.description = description
    }

    //weight
    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }

    //height
    getHeight() {
        return this.height
    }

    setHeight(height) {
        this.height = height
    }


    //numb
    getNumb() {
        return this.numb
    }

    setNumb(numb) {
        this.numb = numb
    }

    //stats
    getStats() {
        return this.stats
    }

    setAStat(stat, numb) {
        this.stats[stat] = numb
    }

    //img
    getImg(){
        return this.img
    }

    setImg(img) {
        this.img = img
    }

    //abilities
    getAbilities() {
        return this.abilities
    }

    setAbilities(ability) {
        this.abilities = ability
    }

    //types
    getTypes() {
        return this.types 
    }

    setTypes(type) {
        this.types.push(type)
    }
}