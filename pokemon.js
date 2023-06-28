document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL and extract the Pokemon ID from it
    var pokemonId = window.location.pathname.split('/').pop().split('.')[0];
  
    // Fetch the Pokemon data from the server
    fetch('Pokemon.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Find the Pokemon with the matching ID
        var pokemon = data.find(function(p) {
          return p.Nr === pokemonId;
        });
  
        if (pokemon) {
          // Populate the template with the Pokemon data
          document.getElementById('pokemon-image').src = pokemon.Bild;
          document.getElementById('pokemon-name').textContent = pokemon.Name;
          document.getElementById('pokemon-description').textContent = pokemon.Beschreibung;
          document.getElementById('pokemon-type').textContent = 'Typ: ' + pokemon.Typ;
          document.getElementById('pokemon-size').textContent = 'Größe: ' + pokemon.Größe;
        } else {
          console.error('Pokemon not found');
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
  