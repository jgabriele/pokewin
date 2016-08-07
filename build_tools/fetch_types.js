var http  = require('http');
var fs    = require('fs');

const NUMBER_OF_TYPES = 18;

/**
 * Fetch pokemon from pokeapi
 * If success, resolve its data
 * If fail, resolve its index
 * We want it to resolve always so Promise.all() can resolve with partial data
 */
function fetchType(index) {
  return new Promise((resolve) => {
    const url = 'http://pokeapi.co/api/v2/type/' + index + '/';
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

function fetchAll(types, promisesList) {
  return Promise.all(promisesList)
    .then((results) => {
      // Failed request resolve the index of the types who failed
      const failedRequests = results
        .filter((res) => typeof (res) === 'number');

      // We concat the types we already have (it's a recursive call)
      // with the one we just fetched successfully
      types = types.concat(results
        .filter((res) => typeof (res) === 'string')
        .map((res) => {
          res = JSON.parse(res);
          return {
            name: res.name,
            names: res.names.map((lang) => ({ name: lang.name, lang: lang.language.name })),
            damages: {
              half: {
                from: res.damage_relations.half_damage_from.map((type) => type.name),
                to: res.damage_relations.half_damage_to.map((type) => type.name)
              },
              no: {
                from: res.damage_relations.no_damage_from.map((type) => type.name),
                to: res.damage_relations.no_damage_to.map((type) => type.name)
              },
              double: {
                from: res.damage_relations.double_damage_from.map((type) => type.name),
                to: res.damage_relations.double_damage_to.map((type) => type.name)
              }
            }
          }
        }));

      return [types, failedRequests];
    })
    .then((res) => {
      const types = res[0];
      const failedIndexes = res[1];

      if (failedIndexes.length) {
        console.log('Retrying for', failedIndexes.length, 'types');
        const retryPromises = failedIndexes.map((index) => fetchType(index));
        return fetchAll(types, retryPromises)
      } else {
        return types;
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

console.log('Fetching All types from pokeapi.co...');

const allPromises = [];
for (var i=1; i<=NUMBER_OF_TYPES; i++) {
  allPromises.push(fetchType(i));
}
allPromises.push(fetchType(10001));
allPromises.push(fetchType(10002));

fetchAll([], allPromises)
  .then((typesJSON) => {
    fs.writeFile('./front/data/types.json', JSON.stringify(typesJSON), function () {
      console.log('SUCCESS!');
    });
  });