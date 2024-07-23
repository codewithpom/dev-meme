# Reads the data from the data.json file creates README.md file

import json


def get_data(file_name):
    with open(file_name) as json_file:
        data = json.load(json_file)
    return data


def create_readme(data):
    content_to_be_added = "A repository that contains memes just for people like us.\n\n"
    for i in data:
        content_to_be_added += "-------------------------------------"
        content_to_be_added += "\n\n"
        content_to_be_added += i['title']
        content_to_be_added += "\n"
        content_to_be_added += "\n"
        content_to_be_added += f"![]({i['url']})"
        content_to_be_added += "\n\n"
        content_to_be_added += "-------------------------------------"

    return content_to_be_added


if __name__ == "__main__":
    data = get_data('data/data.json')
    data = create_readme(data)
    print(data)
    with open('README.md', 'w') as f:
        f.write(data)


        write some random things

        some more dangerous code 
