var path  = require('path');
var http  = require('http');
var fs    = require('fs');

/**
 * Actually performs the image's download
 * @param  {[String]} name Image name
 * @return {}              Nothing
 */
function downloadImage(index) {
  var file = fs.createWriteStream(path.join(__dirname, '../front/images', index + '.png'));
  var url = 'http://www.pokexperto.net/nds/artwork/dreamworld/' + index + '.png';

  var request = http.get(url, function(response) {
    response.pipe(file);
  });
}

/**
 * Fetch image for each pokemon id
 * @return {} Nothing, but download all images :)
 */
function fetchArtworks(maxIndex) {
  for(let i=1; i <= maxIndex; i++) {
    downloadImage(i);
  }
}

// Let's start!
fetchArtworks(251); // Gen 1 + Gen 2