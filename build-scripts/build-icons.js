const fs = require('fs-extra');
const icons = require('svg-app-icon');

fs.readFile("./src/images/application-icon.svg")
  .then(sourceBuffer => {
    return icons(sourceBuffer, {
      destination: "./build/icons"
    })
  })