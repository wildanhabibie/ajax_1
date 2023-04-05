const getDataButton = document.getElementById("getData");
const pokemonDataDiv = document.getElementById("pokemonData");
const numberSpan = document.getElementById("number");
const nameSpan = document.getElementById("name");
const typeSpan = document.getElementById("type");
const image = document.getElementById("image");

getDataButton.addEventListener("click", () => {
	fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
		.then(response => response.json())
		.then(data => {
			numberSpan.innerText = data.id;
			nameSpan.innerText = data.name;
			typeSpan.innerText = data.types[0].type.name;
			image.src = data.sprites.front_default;
			pokemonDataDiv.classList.remove("hidden");
		})
		.catch(error => console.log(error));
});
