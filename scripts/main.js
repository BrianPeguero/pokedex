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

let pokemonCard1 = document.getElementById('pokemon-card-1')
let pokemonCard2 = document.getElementById('pokemon-card-2')
let pokemonCard3 = document.getElementById('pokemon-card-3')
let pokemonCard4 = document.getElementById('pokemon-card-4')
let pokemonCard5 = document.getElementById('pokemon-card-5')
let pokemonCard6 = document.getElementById('pokemon-card-6')

pokemonCards = [pokemonCard1, pokemonCard2, pokemonCard3, pokemonCard4, pokemonCard5, pokemonCard6]


let pokemonCardName1 = document.getElementById('pokemon-card-name-1')
let pokemonCardName2 = document.getElementById('pokemon-card-name-2')
let pokemonCardName3 = document.getElementById('pokemon-card-name-3')
let pokemonCardName4 = document.getElementById('pokemon-card-name-4')
let pokemonCardName5 = document.getElementById('pokemon-card-name-5')
let pokemonCardName6 = document.getElementById('pokemon-card-name-6')

let pokemonCardNames = [pokemonCardName1, pokemonCardName2, pokemonCardName3, pokemonCardName4, pokemonCardName5, pokemonCardName6]


let pokemonCardImg1 = document.getElementById('pokemon-card-img-1')
let pokemonCardImg2 = document.getElementById('pokemon-card-img-2')
let pokemonCardImg3 = document.getElementById('pokemon-card-img-3')
let pokemonCardImg4 = document.getElementById('pokemon-card-img-4')
let pokemonCardImg5 = document.getElementById('pokemon-card-img-5')
let pokemonCardImg6 = document.getElementById('pokemon-card-img-6')

let pokemonCardImgs = [pokemonCardImg1, pokemonCardImg2, pokemonCardImg3, pokemonCardImg4, pokemonCardImg5, pokemonCardImg6]




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
        console.log(response)
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

    pokemon.setId(response["id"])

    for(let i = 0; i < 6; i++){
        pokemon.setAStat(response["stats"][i]["stat"]["name"], response["stats"][i]["base_stat"])
    }

    pokemon.setHeight(response["height"])
    pokemon.setWeight(response["weight"])

    //pokemon img and gif
    if(response["id"] < 722) {
        pokemon.setGif(`https://www.pkparaiso.com/imagenes/xy/sprites/animados/${response["name"]}.gif`)
        pokemon.setImg(response["sprites"]["front_default"])
    } else {
        pokemon.setImg(response["sprites"]["front_default"])
        pokemon.setGif(response["sprites"]["front_default"])
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
    pokemon.setColor(desc["color"]["name"])

    displayPokemon()
}

function displayPokemon() {
    mainContainer.style.background = `linear-gradient(${pokemon.getColor()} -27%, silver 46%, ${pokemon.getColor()} 178%)`
    pkDescription.innerText = pokemon.getDescription()
    pkImg.src = pokemon.getGif()
    pkName.innerHTML = pokemon.getName().charAt(0).toUpperCase() + pokemon.getName().slice(1)
    pkType.innerHTML = pokemon.type.toString().replace(',', ' , ')
    pkNumb.innerHTML = pokemon.getId().toString()
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

    //add to the screen
    for (let i = 0; i < pokemonCardNames.length; i++) {
        if(pokemonCardNames[i].innerHTML != trainer.party[i].getName()) {
            pokemonCardNames[i].innerHTML = pokemon.name
            pokemonCardImgs[i].src = pokemon.getImg()
            pokemonCards[i].classList.add('display-card')
        }
    }
})