/*

Download an RSS feed, parse, and save it to a file.

Usage:
node rss-to-json url-to-rss output.json

*/


const fs = require("fs");
const path = require("path");
const Parser = require("rss-parser");
const parser = new Parser();
const [ url, outputPath ] = process.argv.slice(2);

function save(err, feed) {
  if (err !== null) {
    const { message, stack, status } = err;
    console.log("error parsing", url, message, stack, status)
    return
  }

  const outputSource = JSON.stringify(feed, null, "  ");
  fs.writeFile(outputPath, outputSource, function (err) {
    if (err !== null) {
      const { message, stack } = err;
      console.log("error saving", outputPath, message, stack, status)
      return
    }
    console.log("saved", outputPath)
  })
}

parser.parseURL(url, save);