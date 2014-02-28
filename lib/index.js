'use strict';

var Bin = require('bin-wrapper');
var path = require('path');

var options = {
    name: 'optipng-stream',
    bin: 'optipng-stream',
    path: path.join(__dirname, '../vendor'),
    src: 'https://github.com/ameyp/optipng-stream/tarball/master',
    buildScript: './configure --bindir="' + path.join(__dirname, '../vendor') + '" && ' +
	'make install',
    platform: {
	darwin: {
	    url: 'https://raw.github.com/ameyp/optipng-stream-bin/0.3.1/vendor/osx/optipng-stream'
	},
	freebsd: {
	    url: 'https://raw.github.com/ameyp/optipng-stream-bin/0.3.1/vendor/freebsd/optipng-stream'
	},
	linux: {
	    url: 'https://raw.github.com/ameyp/optipng-stream-bin/0.3.1/vendor/linux/x86/optipng-stream',
	    arch: {
		x64: {
		    url: 'https://raw.github.com/ameyp/optipng-stream-bin/0.3.1/vendor/linux/x64/optipng-stream'
		}
	    }
	},
	win32: {
	    bin: 'optipng-stream.exe',
	    url: 'https://raw.github.com/yeoman/node-optipng-bin/0.3.1/vendor/win/optipng-stream.exe'
	}
    }
};
var bin = new Bin(options);

exports.bin = bin;
exports.options = options;
exports.path = bin.path;
