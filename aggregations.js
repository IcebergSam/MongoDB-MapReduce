db.tweets.aggregate([{ $group: {_id: "$user.name", num_tweets: {$sum:1}} }, { $sort: {num_tweets:-1} }]) 

db.tweets.aggregate([{ $group: {_id: "$place.name", num_tweets: {$sum:1}} }, { $sort: {num_tweets:-1} }]) 

db.tweets.aggregate([{ $group: {_id: "$in_reply_to_screen_name", num_replies: {$sum:1}} }, { $sort: {num_replies:-1} }]) 

db.tweets.aggregate([{ $group: {_id: "$user.name", num_hashtags: {$sum: {$size:"$entities.hashtags"}}} }, { $sort: {num_hashtags:-1} }] ) 
