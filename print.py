import json
  
# Opening JSON file
f = open('tweets.json',)
    
# returns JSON object as 
# a dictionary
data = json.load(f)
      
# Iterating through the json
# list
for i in data['_id']:
    print(i)
                
# Closing file
f.close()
