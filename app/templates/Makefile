.PHONY: all build clean deploy less docs

all: build

build: node_modules less js
	chmod a+x bin/server.js
	chmod a+x bin/build.sh
	./bin/build.sh

less: node_modules/ dist/
	./node_modules/.bin/lessc src/less/main.less > dist/all.css --clean-css

js: node_modules/ lib/ dist/
	node ./node_modules/.bin/r.js -o build-config.js

dist/:
	mkdir dist

# if package.json changes, install
node_modules: package.json
	npm install
	touch $@

lib/: bower.json
	./node_modules/.bin/bower install
	touch $@

test: build
	./node_modules/karma/bin/karma start karma.conf.js --singleRun=true

testw: build
	./node_modules/karma/bin/karma start karma.conf.js

docs: 
	./node_modules/.bin/docco src/js/*.js
	open docs/shell-view.html

clean:
	-npm cache clean
	-./node_modules/.bin/bower cache clean
	-rm -rf node_modules
	-rm -rf dist
	-rm -rf lib

run: build
	bin/server.js

lint: build
	./node_modules/jshint/bin/jshint src/js

deploy: build
	bin/gz.sh
	bin/cdn.sh $(BUILD_NS)

echo:
	echo BUILD_NS: $(BUILD_NS)
