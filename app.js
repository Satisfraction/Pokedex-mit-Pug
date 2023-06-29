const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Set up the public directory to serve static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
})


// Define the route for the individual Pokemon pages
app.get('/pokedex/:name', (req, res) => {
  const name = req.params.name;
  const pokemon = pokedex.find(pokemon => pokemon.Name === name);
  res.render('pokedex', { pokemon });
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
