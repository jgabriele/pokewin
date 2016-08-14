var path  = require('path');
var http  = require('http');
var fs    = require('fs');
var exec  = require('child_process').exec;

var IMAGES_SRC_DIR = path.join(__dirname, '../front/images_jpg/');
var IMAGES_DIST_DIR = path.join(__dirname, '../front/images/');

fs.readdir(IMAGES_SRC_DIR, function(err, files) {
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
  var cmd = `gm convert ${IMAGES_SRC_DIR}${fileName} -fuzz 2% -transparent "#ffffff" ${IMAGES_DIST_DIR}${imageName}.png`;
  console.log(cmd);
  exec(cmd);
}