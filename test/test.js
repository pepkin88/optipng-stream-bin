/*global afterEach, beforeEach, describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var optipng = require('../').path;
var path = require('path');
var rm = require('rimraf');
var spawn = process.platform === 'win32' ? require('win-spawn') : require('child_process').spawn;

describe('optipng()', function () {
    beforeEach(function () {
        fs.mkdirSync(path.join(__dirname, 'tmp'));
    });

    afterEach(function () {
        rm.sync(path.join(__dirname, 'tmp'));
    });

    it('should minify stdin input and write to stdout', function (cb) {
        var cp = spawn(optipng, ['-o2']);
        var src = path.join(__dirname, 'fixtures/test.png');
        var dest = path.join(__dirname, 'tmp/test.png');

        fs.createReadStream(src).pipe(cp.stdin);

        cp.stdout.pipe(fs.createWriteStream(dest).on('close', function () {
            cb(assert.ok(fs.statSync(dest).size < fs.statSync(src).size));
        }));
    });
});
