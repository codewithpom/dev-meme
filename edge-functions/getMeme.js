const memes = require("../data/data.json")


exports.handler = async function (event, context) {
    const request_body = JSON.parse(event.body)
    console.log(request_body)
    const index = request_body['index']
    const result = memes[index]

    return {
        statusCode: 200,
        body: JSON.stringify({
            title: result.title,
            url: result.url,
            twitter_hashtags: result.twitter_hashtags,
            index: index
        }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    };
}


