let trainer = new Trainer()

let form = document.getElementById('welcome-page-form')
let welcomePage = document.getElementById('welcome-page')
let welcomePageName = document.getElementById("welcome-page-name")
let mainContainer = document.getElementById("main-container")
let curtain = document.getElementById('curtain')
let pokemonForm = document.getElementById('pokemon-search-form')
let LoadingScreen = document.getElementById('loading-screen')
let curtainTop = document.getElementById("curtain-top")
let curtainBottom = document.getElementById("curtain-bottom")


let pkName = document.getElementById('pk-name')
let pkDescription = document.getElementById('pk-description')
let pkType = document.getElementById('pk-type')
let pkImg = document.getElementById('pk-img')


let options = document.getElementById('options')

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault()

    pokemonName = pokemonForm[0].value
    getPokemon(pokemonName)

    LoadingScreen.style.display = "block"
    setTimeout(() => {
        LoadingScreen.style.display = "none"
        openCurtain()
    }, 4000)
})

async function getPokemon(pokemonName) {
    try {
        let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        let response = await request.json()

        createPokemon(response)

    } catch (err) {
        // error.innerHTML = "There was an error please try again."
    }
}

async function getPokemonDescription(pokemon, url) {
    try {
        let request = await fetch(url)
        let response = await request.json()

        setDResponse(pokemon, response)
    } catch (err) {
        // error.innerHTML = "There was an error please try again."
    }
}

function openCurtain() {
    pokemonForm[0].classList.add("fadeout")

    pokemonForm.style.display = "none"

    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            curtainTop.style.top = `${-i}px`
        }, i * 2)
    }
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            curtainBottom.style.bottom = `${-i}px`
        }, i * 2)
    }
}

function createPokemon(response) {
    pokemon = new Pokemon()

    pokemon.setName(response["name"])

    pokemon.setNumb(response["order"])

    for(let i = 0; i < 6; i++){
        pokemon.setAStat(response["stats"][i]["stat"]["name"], response["stats"][i]["base_stat"])
    }

    pokemon.setHeight(response["height"])
    pokemon.setWeight(response["weight"])

    //pokemon img
    if(response["order"] < 722) {
        pokemon.setImg(`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${response["name"]}.gif`)
    } else {
        pokemon.setImg(response["sprites"]["front_default"])
    }

    //abilities
    for (let i = 0; i < response["abilities"].length; i++) {
        pokemon.abilities.push(response["abilities"][i]["ability"]["name"])
    }

    //types
    for (let i = 0; i < response["types"].length; i++) {
        pokemon.type.push(response["types"][i]["type"]["name"])
    }

    //description
    getPokemonDescription(pokemon, response["species"]["url"])

}

function setDResponse(pokemon, desc) {
    pokemon.setDescription(desc["genera"][2]["genus"])
    
    displayPokemon(pokemon)
}







form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    var name = form[0].value

    trainer.setName(name)
    console.log(`${trainer.getName()} has joined the game`)

    //disapear form
    formDisapear()

    //name fade in
    setTimeout(() => {
        nameFadeIn(name)
    }, 1000)

    //namefade out
    setTimeout(() => {
        nameFadeOut()
    }, 1000)

    //from fade in
    setTimeout(() => {
        pokemonForm.style.display = "block"
        pokemonForm.classList.add("fadein")
        setTimeout(() => {
            pokemonForm.style.opacity = "1"
        }, 1000)
    }, 3000)
})

function nameFadeIn(name){
    //fadein
    welcomePageName.innerHTML = `Welcome trainer ${name}`
    welcomePageName.classList.add("fadein")
    
    welcomePageName.style.opacity = "1"
}

function nameFadeOut() {
    //fadeout
    welcomePage.classList.remove("fadein")

    setTimeout(() => {
        welcomePage.classList.add("fadeout")
        setTimeout(() => {
            mainContainer.removeChild(welcomePage)
        }, 3000)
    }, 2000)
}

function formDisapear() {
    form[0].classList.add("fadeout")
    setTimeout(() => {
        welcomePage.removeChild(form)
    }, 1000)
}









function displayPokemon(pokemon) {
    pkDescription.innerText = pokemon.getDescription()
    pkImg.src = pokemon.getImg()
    pkName.innerHTML = pokemon.getName()
    pkType = pokemon.getTypes()
}


