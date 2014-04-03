#!/bin/bash

# Directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT=$DIR/../

# build the compiled JS
node $ROOT/r.js -o build-config.js

# compile less into CSS
$ROOT/node_modules/.bin/lessc src/less/main.less > dist/all.css

# include the i18n files
cp -r $ROOT/nls dist/
