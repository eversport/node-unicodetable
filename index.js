var fs = require('fs');
var path = require('path');
var categories = fs.readdirSync(path.join(__dirname, "category"));

var exportCategories = {};
for (var i = 0; i < categories.length; i++) {
  var file = categories[i];
  if (file.endsWith('.js')) {
    var cat = file.slice(0, -3);
    exportCategories[cat] = require('./category/' + cat);
  }
}

module.exports = {
  category: exportCategories
};