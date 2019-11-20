let trainer = new Trainer()

let form = document.getElementById('welcome-page-form')
let welcomePage = document.getElementById('welcome-page')
let welcomePageName = document.getElementById("welcome-page-name")
let mainContainer = document.getElementById("main-container")
let curtain = document.getElementById('curtain')
let pokemonForm = document.getElementById('pokemon-search-form')

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