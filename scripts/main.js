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
let pkNumb = document.getElementById('pk-numb')


let options = document.getElementById('options')
let optionsState = 0
let searchBtn = document.getElementById('search-btn')
let addToParty = document.getElementById('add-to-party')










pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault()

    pokemonName = pokemonForm[0].value
    getPokemon(pokemonName)

    LoadingScreen.style.display = "block"
    setTimeout(() => {
        LoadingScreen.style.display = "none"
        openCurtain()
    }, 2000)
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

async function getPokemonDescription(url) {
    try {
        let request = await fetch(url)
        let response = await request.json()

        setDResponse(response)
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

    pokemon.setInt(response["id"])

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
    getPokemonDescription(response["species"]["url"])

}

function setDResponse(desc) {
    pokemon.setDescription(desc["genera"][2]["genus"])
    
    displayPokemon()
}

function displayPokemon() {
    pkDescription.innerText = pokemon.getDescription()
    pkImg.src = pokemon.getImg()
    pkName.innerHTML = pokemon.getName().charAt(0).toUpperCase() + pokemon.getName().slice(1)
    pkType.innerHTML = pokemon.type.toString().replace(',', ' , ')
    pkNumb.innerHTML = pokemon.getInt().toString()
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








options.addEventListener('click', () => {
    for (let i = 0; i <= 135; i++) {
        setTimeout(() => {
            options.style.transform = `rotate(${i}deg)`
        }, i * 2)
    }
    for (let i = 0; i <= 175; i++) {
        setTimeout(() => {
            searchBtn.style.bottom = `${i}px`
        }, i)
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            addToParty.style.bottom = `${i}px`
        }, i)
    }
})









searchBtn.addEventListener('click', () => {
    //bring the buttons back down
    for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
            options.style.transform = `rotate(${ - i}deg)`
        }, i * 2)
    }
    for (let i = 0; i <= 175; i++) {
        setTimeout(() => {
            searchBtn.style.bottom = `${175 - i}px`
        }, i * 2)
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            addToParty.style.bottom = `${100 - i}px`
        }, i * 2)
    }

    //close the slides
    for (let i = 0; i <= 1000; i++) {
        setTimeout(() => {
            curtainTop.style.top = `${-1000 + i}px`
        }, i * 2)
    }
    for (let i = 0; i <= 1000; i++) {
        setTimeout(() => {
            curtainBottom.style.bottom = `${-1000 + i}px`
        }, i * 2)
    }

    //make the form appear again
    pokemonForm.style.opacity = "0"
    pokemonForm.style.display = "block"
    pokemonForm.classList.remove("fadein")
    pokemonForm[0].classList.remove("fadeout")
    pokemonForm[0].value = ""
    
    setTimeout(() => {
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => {
                pokemonForm.style.opacity = `${i/100}`
            }, i * 2)
        }
    }, 2500)
})









addToParty.addEventListener('click', () => {
    //close the options menu
    for (let i = 0; i <= 90; i++) {
        setTimeout(() => {
            options.style.transform = `rotate(${ - i}deg)`
        }, i * 2)
    }
    for (let i = 0; i <= 175; i++) {
        setTimeout(() => {
            searchBtn.style.bottom = `${175 - i}px`
        }, i * 2)
    }
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            addToParty.style.bottom = `${100 - i}px`
        }, i * 2)
    }

    //add the pokemon to the trainers party
    trainer.addPokemonToParty(pokemon)
})