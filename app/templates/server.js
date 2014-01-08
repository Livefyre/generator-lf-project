#!/usr/bin/env node

var express = require('express');
var lessMiddleware = require('less-middleware');
var pubDir = __dirname + '/..';
var lfBootstrapFonts = __dirname + '/../lib/livefyre-bootstrap/src/fonts';

var app = express();

app.use(lessMiddleware({
    src: '/src/less',
    dest: '/dev/css',
    compress: false,
    force: true,
    root: pubDir,
    paths: ['lib/']
}));
app.use('/dev/fonts', express.static(lfBootstrapFonts));
app.use('/', express.static(pubDir));

console.log('Running on http://localhost:8080');
app.listen(8080);
