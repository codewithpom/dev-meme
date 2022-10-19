const memes = require("../data/data.json")


exports.handler = async function (event, context) {
    const request_body = JSON.parse(event.body)
    console.log(request_body)
}


