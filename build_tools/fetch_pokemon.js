var http  = require('http');
var fs    = require('fs');

/**
 * Fetch pokemon from pokeapi
 * If success, resolve its data
 * If fail, resolve its index
 * We want it to resolve always so Promise.all() can resolve with partial data
 */
function fetchPokemon(index) {
  return new Promise((resolve) => {
    const url = 'http://pokeapi.co/api/v2/pokemon/' + index + '/';
    const request = http.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        console.log('Wrong status code for #' + index);
        resolve(index);
       }

      // temporary data holder
      const body = [];

      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));

      // we are done, resolve promise with those joined chunks
      response.on('end', () => {
        resolve(body.join(''));
      });
    });

    request.on('error', (err) => {
      console.log('Request Error for #' + index);
      resolve(index)
    });
  });
}

function fetchAll(pokemons, promisesList) {
  return Promise.all(promisesList)
    .then((results) => {
      // Failed request resolve the index of the Pokemon who failed
      const failedRequests = results
        .filter((res) => typeof (res) === 'number');

      // We concat the pokemons we already have (it's a recursive call)
      // with the one we just fetched successfully
      pokemons = pokemons.concat(results
        .filter((res) => typeof (res) === 'string')
        .map((res) => {
          res = JSON.parse(res);
          return {
            name: res.name,
            types: res.types.map((type) => type.type.name)
          }
        }));

      return [pokemons, failedRequests];
    })
    .then((res) => {
      const pokemons = res[0];
      const failedIndexes = res[1];

      if (failedIndexes.length) {
        console.log('Retrying for', failedIndexes.length, 'pokemons');
        const retryPromises = failedIndexes.map((index) => fetchPokemon(index));
        return fetchAll(pokemons, retryPromises)
      } else {
        return pokemons;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

console.log('Fetching 151 Pokemons from pokeapi.co...');

const allPromises = [];
for (var i=1; i<=151; i++) {
  allPromises.push(fetchPokemon(i));
}

fetchAll([], allPromises)
  .then((pokemonsJSON) => {
    fs.writeFile('./build/data/pokemons.json', JSON.stringify(pokemonsJSON), function () {
      console.log('SUCCESS!');
    });
  });