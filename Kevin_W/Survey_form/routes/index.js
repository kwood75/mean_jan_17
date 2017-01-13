module.exports = function Route(app){

	app.get('/', function(req, res) {
	 res.render("index");
	})

	app.post('/result', function(req, res) {
		submitted_info = {
			name: req.body.name,
			twinpeaks_location: req.body.twinpeaks_location,
			favorite_language: req.body.favorite_language,
			comment: req.body.comment
		};
	 	res.render("result",{user_data: submitted_info});
	})
};