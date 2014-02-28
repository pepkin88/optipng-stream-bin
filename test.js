/*global after, before, describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

var concat = require('concat-stream');
var filesize = require('filesize');
var rm = require('rimraf');
var multipipe = require('multipipe');

var optipng = require('./index').path;

describe('optipng.spawn()', function () {
    before(function () {
	fs.mkdirSync(path.join(__dirname, 'tmp'));
    });

    after(function () {
	rm.sync(path.join(__dirname, 'tmp'));
    });

    it('should minify stdin input and write to stdout', function (done) {
	this.timeout(5000);
	var src = path.join(__dirname, 'fixtures', 'test.png');
	var dest = path.join(__dirname, 'tmp', 'output.png');

	var proc = spawn(optipng, ['-o2']);

	fs.createReadStream(src)
	    .pipe(multipipe(proc.stdin, proc.stdout))
	    .pipe(fs.createWriteStream(dest).on('close', function() {
		done(assert.ok(fs.statSync(dest).size < fs.statSync(src).size));
	    }));
    });
});
