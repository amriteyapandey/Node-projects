module.exports = function(app, passport){

	app.get('/',function(req,res){
		console.log("hello");
		res.render('index.js');
	});

	app.get('/login',function(req,res){

		res.render('login.ejs', {message: req.flash('loginMessage')});

	});

	/*app.post('/login',function(req,res){

	});*/
	
	app.get('/signup', function(req,res){
		res.render('signup.ejs',{message: req.flash('signupMessage')});
	});

	/*app.post('/signup',function(req,res){

	})*/

	app.get('/profile',isLoggedIn,function(req,res){
		res.render('profile.ejs',{
			user: req.user
		});
	});

	app.get('/logout',function(req,res){
		req.logout();
		res.redirect('/');
	});
}

function isLoggedIn(req,res,next){
	if(req.isAuthenticated())
		return next();

	res.redirect('/');
}