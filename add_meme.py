import json

data = json.loads(open("data/data.json", encoding="utf-8").read())

title = input("What is the title of the meme: ")
url = input("What is the url of the meme NOTE:Add ./ if it is a local file: ")
hashtags = [
        "#programming",
        "#programminghumor",
        "#programmingmemes"
]

while True:
    hashtag = input("Enter hashtag (press 'q' to stop): ")
    if hashtag == 'q': break
    hashtags.append(hashtag)

data.append({
    "title": title,
    "url": url,
    "twitter_hahstags": hashtags
    
})

memes = json.dumps(data, indent=4)
memes = memes.replace(u"\u2018", "'").replace(u"\u2019", "'")
file = open("data/data.json", 'w', encoding="utf-8")
file.write(memes)
file.close()
