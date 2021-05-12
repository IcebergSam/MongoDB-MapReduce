function myMapper() { 
	this.entities.hashtags.forEach(function(tag){ 
			emit (tag.text, 1); 
		} 
	); 
} 

function myReducer(key,values) { 
	return Array.sum(values); 
} 

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" }) 
db.mroutput.aggregate({$sort: {value: -1}}) 