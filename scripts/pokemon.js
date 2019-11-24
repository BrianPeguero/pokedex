class Pokemon {
    constructor () {
        this.name = ""
        this.description = ""
        
        this.id = 0

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

        this.gif = ""

        this.abilities = []

        this.type =[]

        this.color = ""
    }

    getColor(){
        return this.color
    }

    setColor(color) {
        this.color = color
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


    //int
    getId() {
        return this.id
    }

    setId(id) {
        this.id = id
    }

    //stats
    getStats() {
        return this.stats
    }

    setAStat(stat, int) {
        this.stats[stat] = int
    }

    //img
    getImg(){
        return this.img
    }

    setImg(img) {
        this.img = img
    }

    //gif
    getGif(){
        return this.gif
    }

    setGif(gif) {
        this.gif = gif
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