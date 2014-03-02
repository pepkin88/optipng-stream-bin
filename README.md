# [optipng](http://optipng.sourceforge.net)-stream-bin [![Build Status](https://secure.travis-ci.org/ameyp/optipng-stream-bin.png?branch=master)](http://travis-ci.org/ameyp/optipng-stream-bin)

*Issues with the output should be reported on the optipng [issue tracker](http://sourceforge.net/p/optipng/bugs/)

This is a wrapper around [node-optipng-bin](https://github.com/yeoman/node-optipng-bin) to add support for reading input PNG data from `STDIN` and writing the generated output PNG data to `STDOUT`. The module is intended to be used only as a binary in the same style as modules that use [bin-wrapper](https://github.com/kevva/bin-wrapper). It cannot be used in any other fashion.

## Usage

	var spawn = require('child_process').spawn;
	var optipng-stream-bin = require('optipng-stream-bin').path;
	var fs = require('fs');

	var proc = spawn(optipng-stream-bin, ["-o2"]);

	fs.createReadStream('input.png')
	.pipe(proc.stdin);

	proc.stdout.pipe(fs.createWriteStream('output.png'));

## License

MIT © [Amey Parulekar](http://wirywolf.com)
