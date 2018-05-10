deploy-api:
	heroku -v && git subtree push --prefix api heroku master

build-ios:
	cd mobile; exp build:ios; cd ..;
