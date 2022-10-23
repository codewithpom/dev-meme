const memes = require("../data/data.json")


function choose(length) {
    const index = Math.floor(Math.random() * length);
    return index;
}

exports.handler = async function (event, context) {
    const index = await choose(memes.length);
    const result = memes[index]
    let url;
    if (!result.url.startsWith("https://") && !result.url.startsWith("http://")) {
        url = "https://eager-meitner-f8adb8.netlify.app" + result.url.substring(1);
    } else {
        url = result.url;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            title: result.title,
            url: url,
            twitter_hashtags: result.twitter_hashtags,
            index: index
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    };
}

