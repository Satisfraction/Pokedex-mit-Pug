
fetch('Pokemon.json')
  .then(response => response.json())
  .then(data => {
    const pokemonList = data;
    const pokemonListContainer = document.getElementById('pokemon-list');

    pokemonList.forEach(pokemon => {
      const pokemonCard = document.createElement('div');
      pokemonCard.className = 'pokemon-card';

      const pokemonImage = document.createElement('img');
      pokemonImage.className = 'pokemon-image';
      pokemonImage.src = pokemon.Bild;
      pokemonImage.alt = pokemon.Name;

      const pokemonNumber = document.createElement('p');
      pokemonNumber.className = 'pokemon-number';
      pokemonNumber.textContent = `Nr: ${pokemon.Nr}`;

      const pokemonName = document.createElement('p');
      pokemonName.className = 'pokemon-name';
      pokemonName.textContent = pokemon.Name;

      const pokemonType = document.createElement('p');
      pokemonType.className = 'pokemon-type';
      pokemonType.textContent = `Type: ${pokemon.Typ}`;

      const pokemonDescription = document.createElement('p');
      pokemonDescription.className = 'pokemon-description';
      pokemonDescription.textContent = pokemon.Beschreibung;

      const pokemonHeight = document.createElement('p');
      pokemonHeight.className = 'pokemon-height';
      pokemonHeight.textContent = `Height: ${pokemon.Größe}`;

      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonNumber);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonType);
      // pokemonCard.appendChild(pokemonDescription);
      pokemonCard.appendChild(pokemonHeight);

      pokemonCard.addEventListener('click', () => {
        // Redirect to the pokemon.html page
        window.location.href = `pokemon.html?name=${pokemon.Name}`;
      });

      pokemonListContainer.appendChild(pokemonCard);
    });
  })
  .catch(error => console.log(error));
