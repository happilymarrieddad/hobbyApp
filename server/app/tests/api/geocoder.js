var geocoder = require('geocoder')

geocoder.geocode(`1812 W. Burbank BLVD, Burbank, CA`,(err,data) => {
	if (err) throw err

	console.log(data.results)
})