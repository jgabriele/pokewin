var path  = require('path');
var http  = require('http');
var fs    = require('fs');
var exec  = require('child_process').exec;

// We need images dir within build_tools
var IMAGES_DIR = path.join(__dirname, './images/');

fs.readdir(IMAGES_DIR, function(err, files) {
  if (err || !files || !files.length) {
    console.error('Error while reading dir', err);
    return;
  }

  files.forEach((fileName) => {
    _createTransparency(fileName);
  });
});

function _createTransparency(fileName) {
  const imageName = fileName.substring(0, fileName.lastIndexOf('.'));
  var cmd = `gm convert ./images/${fileName} -fuzz 3% -transparent "#ffffff" ./tmp/${imageName}.png`;
  exec(cmd);
}