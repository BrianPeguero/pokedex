class Pokemon {
    constructor () {
        this.name = ""
        this.description = ""
        
        this.numb = 0

        this.stats = {
            hp: 0,
            atk: 0,
            def: 0,
            spDef: 0,
            speed: 0
        }

        this.img = ``

        this.abilities = []

        this.type =[]
    }

    //name
    get name() {
        return this.name
    }

    set name(name) {
        this.name = name
    }

    //description
    get description() {
        return this.description
    }

    set description(description) {
        this.description = description
    }

    //numb
    get numb() {
        return this.numb
    }

    set numb(numb) {
        this.numb = numb
    }

    //stats
    get stats() {
        return this.stats
    }

    setAStat(stat, numb) {
        this.stats[stat] = numb
    }

    //img
    get img(){
        return this.img
    }

    set img(img) {
        this.img = img
    }

    //abilities
    get abilities() {
        return this.abilities
    }

    set abilities(ability) {
        this.abilities = ability
    }

    //types
    get types() {
        return this.types 
    }

    set types(type) {
        this.types.push(type)
    }
}