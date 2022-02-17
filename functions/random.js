const memes = require("../data/data.json")


function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

exports.handler = async function (event, context) {
    const result = await choose(memes);
    if (!result.startsWith("https://")) {
        const url = "https://eager-meitner-f8adb8.netlify.app/" + result.url.substring(1);
    } else {
        const url = result.url;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            title: result.title,
            url: url
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    };
}

