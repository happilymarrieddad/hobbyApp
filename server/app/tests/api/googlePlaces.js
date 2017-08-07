// var axios = require('axios')
// var url = 'http://businessprofiles.com/entities/details.json?universal_id=OR-728933-82'

// axios.get(url)
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log('API Error')
// 		console.log(err)
// 	})



var GOOGLE_PLACES_API_KEY = 'AIzaSyBktyRG5DreE4vPoLscJXDCcQKHfl3IJ68'

var GoogleLocations = require('google-locations')

var locations = new GoogleLocations(GOOGLE_PLACES_API_KEY)

// locations.searchByAddress({address: '3257 Railroad Rd, Rincon, NM',name:'Rio', maxResults: 2, rankby: "prominence", radius: 5000}, function(err, response){
//   if (err) {
// 		return console.log(err)
// 	}

// 	console.log(response.details)
// });
 

 // locations.search({keyword: 'Wada Farms Marketing'}, function(err, response) {
 //  console.log("search: ", response.results);
 
  locations.details({placeid:'ChIJFcdufzBfVFMRo3MOJ_oVSkc' }, function(err, response) {
    console.log("search details: ", response.result);
    // search details: Google 
  });
//});