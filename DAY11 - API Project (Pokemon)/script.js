const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const displayPokemon = document.getElementById('displayPokemon')
const container = document.querySelector('.container')

function fetchPokemonData(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

getAllPokemonData()

async function getAllPokemonData(){
    const pokemons = await fetchPokemonData(API_URL)
    const displayAllPokemon = document.createElement('div')

    displayAllPokemon.setAttribute('class','display-all-pokemon')

    pokemons.results.forEach((pokemon,i) => {
        const divElement = document.createElement('div')
        divElement.classList.add('pokemon-item')
        divElement.dataset.url = pokemon.url

        const span = document.createElement('span')
        span.textContent = capitalFirstLetter(pokemon.name)

        getPokemonData(pokemon.url, divElement,'getImage')
        divElement.append(span)
        displayAllPokemon.append(divElement)
        container.append(displayAllPokemon)
    })

    const pokemonItem = document.querySelectorAll('.pokemon-item')
    
    pokemonItem.forEach(pokemon => {
        pokemon.addEventListener('click', ()=> {
            container.innerHTML = ''
            getPokemonData(pokemon.dataset.url, null,'getAll')
           
        })
    })
}


async function getPokemonData(url, div, command) {

    const pokemon = await fetchPokemonData(url)

    if(command == 'getImage') {

        const img = document.createElement('img')
        img.setAttribute('src',pokemon.sprites.front_default)
        div.prepend(img)

    } else if (command == 'getAll') {

        container.innerHTML =''

        console.log(pokemon)

        const divAbility = document.createElement('div')
        divAbility.setAttribute('class','abilities')
        divAbility.textContent = 'Skills: '

        const div = document.createElement('div')
        div.setAttribute('class','display-pokemon')
        div.setAttribute('id','displayPokemon')
       
        pokemon.abilities.forEach(ability=> {
            const span = document.createElement('span')
            span.textContent = capitalFirstLetter(ability.ability.name)
            
            divAbility.append(span)
        })
        
        const html = `
            <img src="${pokemon.sprites.front_default}" id="pokemonImg" class="pokemon-img">
             <div id="pokemonName" class="pokemon-name">${capitalFirstLetter(pokemon.name)}</div><span class="id">ID: ${pokemon.id}</span>
            <span class="pokemon-types">Type: ${capitalFirstLetter(pokemon.types[0].type.name)}</span>
            
        `
        
            const divBack = document.createElement('div')
            divBack.setAttribute('class','prev-btn')
            divBack.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`
            
        const divNext = document.createElement('div')
        divNext.setAttribute('class','next-btn')
        divNext.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`
        
        div.innerHTML = html
        div.append(divAbility)
        div.append(divBack)
        div.append(divNext)
        container.append(div)
       

        const nextBtn = document.querySelector('.next-btn')
        nextBtn.addEventListener('click',()=>{
            let id = pokemon.id + 1
            const nextURL = API_URL + id
            getPokemonData(nextURL, null, 'getAll')
        })

        const prevBtn = document.querySelector('.prev-btn')
        prevBtn.addEventListener('click',()=>{
            let id = pokemon.id - 1
            const prevURL = API_URL + id
            getPokemonData(prevURL, null, 'getAll')
        })
    } 
}

function capitalFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1,str.length)
}
