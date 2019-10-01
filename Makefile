all: minbuild publish

minbuild:
	lein clean
	lein cljsbuild once min
	git commit -am "public update"

publish:
	git subtree push --prefix resources/public/ origin gh-pages

