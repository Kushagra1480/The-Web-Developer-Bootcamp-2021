let firstGen = document.querySelector('#gen1')
let secondGen =  document.querySelector('#gen2')
let thirdGen = document.querySelector('#gen3')
let fourthGen = document.querySelector('#gen4')
let fifthGen = document.querySelector('#gen5')
let sixthGen = document.querySelector('#gen6')
let seventhGen = document.querySelector('#gen7')

let fetchPokemon = async () => {
    for(let i = 1; i < 898; ++i){
        await getPokemon(i)
    }
}

let getPokemon = async id => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let res = await fetch(url);
    let pokemon = await res.json();
    createPokemonCard(pokemon)
}

fetchPokemon()

function createPokemonCard(pokemon){
    //creating each HTML element
    let poke = document.createElement('div')
    let img = document.createElement('img')
    let label = document.createElement('span')
    let nameLabel = document.createElement('span')
	let typeLabel = document.createElement('span')

    let name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)//capitalizing the first letter of each pokemon name
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`//linking sprites
	

	//adding text to elements
	const poke_types = pokemon.types.map(type => type.type.name);
    label.innerText = `#${pokemon.id}`
    nameLabel.innerText = `${name}`
	if(poke_types[1])
		typeLabel.innerText = `${poke_types[0]} // ${poke_types[1]}`
	else
		typeLabel.innerText = `${poke_types[0]}`

	//adding classes to elements
    label.classList.add('labelID')
    nameLabel.classList.add('labelName')

    //creating the card
    poke.appendChild(img)
    poke.appendChild(label)
    poke.appendChild(nameLabel)
	poke.appendChild(typeLabel)

	//adding pokemon based on generation
    if(pokemon.id < 152)    
        firstGen.appendChild(poke)
    else if(pokemon.id >= 152 && pokemon.id < 252)
        secondGen.appendChild(poke)
    else if(pokemon.id >= 252 && pokemon.id < 387)
        thirdGen.appendChild(poke)
    else if(pokemon.id >= 387 && pokemon.id < 495)
        fourthGen.appendChild(poke)
    else if(pokemon.id >= 495 && pokemon.id < 650)
        fifthGen.appendChild(poke)
    else if(pokemon.id >= 650 && pokemon.id < 722)
        sixthGen.appendChild(poke)
    else 
        seventhGen.appendChild(poke)
}
