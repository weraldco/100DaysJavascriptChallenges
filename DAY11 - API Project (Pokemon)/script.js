const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const displayPokemon = document.getElementById('displayPokemon')

function fetchPokemonData(url){
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

getAllPokemonData()

async function getAllPokemonData(){
    const pokemons = await fetchPokemonData(API_URL)
    
    pokemons.results.forEach((pokemon,i) => {
        const divElement = document.createElement('div')
        divElement.classList.add('pokemon-item')
        divElement.dataset.url = pokemon.url
        const span = document.createElement('span')
        span.textContent = pokemon.name

        getPokemonData(pokemon.url, divElement,'getImage')
        divElement.append(span)
        displayPokemon.append(divElement)
    })

    const pokemonItem = document.querySelectorAll('.pokemon-item')
    pokemonItem.forEach(pokemon => {
        pokemon.addEventListener('click', ()=> {
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
        console.log(pokemon)
    }
    
} 

// async function pokemonData


