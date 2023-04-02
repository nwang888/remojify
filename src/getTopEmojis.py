import json
from google.cloud import firestore

# The `project` parameter is optional and represents which project the client
# will act on behalf of. If not supplied, the client falls back to the default
# project inferred from the environment.
db = firestore.Client(project='remojify')

# Load the JSON file
with open('data/initial_emoji_vals.json') as f:
    data = json.load(f)

# Create a list to hold the hex values for each rank
top_emojis = []

# Loop through the items in the JSON data
for item in data:
    rank = item['Rank']
    if int(rank) <= 150:  # Only process ranks 1 to 150
        emoji_value = item['Emoji']
        # Add the hex value to the list for this rank
        top_emojis.append(emoji_value)
        data = {
            descriptors: {},
            meta: {
                u'name': item['Name'],
                u'hex': item['Hex'],
                u'emoji': item['Emoji'],
                u'year': item['Year'],
                u'category': item['Category'],
                u'subcategory': item['Subcategory'],
            }
        }
        # Add to firestore
        db.collection(u'emoji-values').document(item['Emoji']).set(data)


# Write the hex values for ranks 1 to 150 to a new JSON file
with open('top_emojis.json', 'w') as f:
    json.dump(top_emojis, f)
