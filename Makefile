all: publish

publish:
	lein clean
	lein cljsbuild once min
	git commit -am "public update"
	git subtree push --prefix resources/public/ origin gh-pages

