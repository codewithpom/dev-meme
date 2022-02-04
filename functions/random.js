const memes = require("../data/data.json")


function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

exports.handler = async function (event, context) {
    const result = await choose(memes);
    // remove the first dot from the url
    const url = result.url.substring(1);
    return {
        statusCode: 200,
        body: JSON.stringify({
            title: result.title,
            url: url
        })
    };
}

