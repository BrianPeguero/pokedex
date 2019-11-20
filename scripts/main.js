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

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault()

    pokemon = pokemonForm[0].value

    getPokemon(pokemon)

    LoadingScreen.style.display = "block"
    setTimeout(() => {
        LoadingScreen.style.display = "none"
        openCurtain()
    }, 875)
})

async function getPokemon(pokemon) {
    try {
        request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        response = await request.json()

        console.log( response["name"])
        // pokemonName.innerHTML = response["name"]
        // pokemonImg.src = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${response["name"]}.gif`
    } catch (err) {
        // error.innerHTML = "There was an error please try again."
    }
}

function openCurtain() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            curtainTop.style.top = `${-i}px`
        }, i)
    }
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            curtainBottom.style.bottom = `${-i}px`
        }, i)
    }
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