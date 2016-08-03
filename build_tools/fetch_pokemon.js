var http = require('http');

function fetchPokemon(index) {
  return new Promise((resolve, reject) => {
    const url = 'http://pokeapi.co/api/v2/pokemon/' + index + '/';
    const request = http.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode + 'url: ' + url));
       }

      // temporary data holder
      const body = [];

      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));

      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });

    // handle connection errors of the request
    request.on('error', (err) => reject(err));
  });
}

console.log('let\'s go');

const allPromises = [];
for (var i=1; i<=80; i++) {
  allPromises.push(fetchPokemon(i));
}

Promise.all(allPromises)
  .then((result) => {
    const pokemons = [];
    result.forEach((res) => {
      const pokemon = JSON.parse(res);
      pokemons.push({
        name: pokemon.name,
        types: pokemon.types.map((type) => type.type)
      });
    });

    console.log(pokemons);
  })
  .catch((err) => console.error(err));