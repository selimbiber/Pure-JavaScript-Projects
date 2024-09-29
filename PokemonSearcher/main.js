const SEARCH_INPUT = document.getElementById("search-input");
const SEARCH_BTN = document.getElementById("search-button");
const ALERT_TEXT = document.getElementById("alert-text");
const DISPLAY_CONTAINER = document.querySelector(".display-container");
const TABLE_EL = document.getElementById("table");

async function getPokemonDetails(identifier) {
  const response = await fetch(
    `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${identifier}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const pokemonObj = await response.json();
  return pokemonObj;
}

async function displayPokemonDetails() {
  const identifier = SEARCH_INPUT.value.toLowerCase();
  try {
    const pokemon = await getPokemonDetails(identifier);
    const { name, id, weight, height, sprites, types, stats } = pokemon;

    DISPLAY_CONTAINER.innerHTML = `
      <div>
          <p id="pokemon-name">${name.toUpperCase()}</p>
          <p id="pokemon-id">#${id}</p>
      </div>
      <div>
          <p id="weight">Weight: ${weight}</p>
          <p id="height">Height: ${height}</p>
      </div>
      <img src="${sprites.front_default}" alt="${name}">
      <ul id="types">
          ${types.map((item) => `<li>${item.type.name}</li>`).join("")}
      </ul>
    `;

    TABLE_EL.innerHTML = `
      <tbody>
          <tr>
              <th>Base</th>
              <th>Stats</th>
          </tr>
          <tr>
              <td>HP:</td>
              <td id="hp">${stats[0].base_stat}</td>
          </tr>
          <tr>
              <td>Attack:</td>
              <td id="attack">${stats[1].base_stat}</td>
          </tr>
          <tr>
              <td>Defense:</td>
              <td id="defense">${stats[2].base_stat}</td>
          </tr>
          <tr>
              <td>Sp. Attack:</td>
              <td id="special-attack">${stats[3].base_stat}</td>
          </tr>
          <tr>
              <td>Sp. Defense:</td>
              <td id="special-defense">${stats[4].base_stat}</td>
          </tr>
          <tr>
              <td>Speed:</td>
              <td id="speed">${stats[5].base_stat}</td>
          </tr>
      </tbody>
    `;

    ALERT_TEXT.className = "hidden";
    document.querySelector("article").classList.remove("hidden");
  } catch (error) {
    ALERT_TEXT.classList.remove("hidden");
    document.querySelector("article").className = "hidden";
    console.error(error);
  }
}

SEARCH_INPUT.addEventListener("keypress", () => {
  if (event.key === "Enter") displayPokemonDetails();
});

SEARCH_BTN.addEventListener("click", displayPokemonDetails);
