var xml2js = require("xml2js");
var fs = require("fs");
var path = require("path");

console.log("Constructing Medium JSON");

var parser = new xml2js.Parser();

var rawData = fs.readFileSync(__dirname + "/downloads/medium.xml");

var mediumData = null;

parser.parseString(rawData, function (err, result) {
  mediumData = result;
});

const getThumbail = (rawContent = "") => {
  const urlList =
    (rawContent &&
      rawContent
        .match(/\bhttps?:\/\/\S+/gi)
        .filter((str) => str.includes("cdn-images"))) ||
    [];
  return urlList[0].substring(0, urlList[0].length - 1);
};

const mediumList =
  mediumData &&
  mediumData.rss &&
  mediumData.rss.channel &&
  mediumData.rss.channel[0] &&
  mediumData.rss.channel[0].item
    ? mediumData.rss.channel[0].item
    : [];
const data = [];
mediumList.forEach((article = {}) => {
  data.push({
    thumbnail: getThumbail(article["content:encoded"][0]) || "",
    title: article.title[0] || "",
    categories: article.category || [],
    link: article.link[0] || "",
  });
});

fs.writeFileSync(path.resolve(__dirname, "../static/medium.json"), JSON.stringify(data, null, 2));
console.log("Finished Medium JSON");
