#!/usr/bin/env node

var express = require('express');
var lessMiddleware = require('less-middleware');
var pubDir = __dirname + '/..';
var lfBootstrapFonts = __dirname + '/../lib/livefyre-bootstrap/src/fonts';
var portfinder = require('portfinder');

var app = express();

app.use(lessMiddleware('/src/less',{
    dest: '/dev/css',
    force: true,
    pathRoot: pubDir
}, {
    paths: [pubDir]
}, {
    compress: false
}));
app.use('/dev/fonts', express.static(lfBootstrapFonts));
app.use('/', express.static(pubDir));

portfinder.basePort = 8080;
portfinder.getPort(function (err, port) {
    if (err) throw err;
    app.listen(port, function () {
        console.log('<%= name %> listening on port: ' + port);
    });
});
