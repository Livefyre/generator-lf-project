.PHONY: all build

all: build

build: node_modules
	chmod a+x bin/server.js

# if package.json changes, install
node_modules: package.json
	npm install
	touch $@

test: build
	./node_modules/karma/bin/karma start karma.conf.js --singleRun=true

testw: build
	./node_modules/karma/bin/karma start karma.conf.js

clean:
	rm -rf node_modules

package: build

run: build
	bin/server.js

lint: build
	./node_modules/jshint/bin/jshint src/js
