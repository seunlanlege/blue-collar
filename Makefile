deploy-api:
	heroku -v && git subtree push --prefix api heroku master

build-ios:
	echo "Did you increment the build number???"; \
	cd mobile; exp build:ios; cd ..;
