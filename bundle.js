#! /usr/bin/env node

var argv    = process.argv,
    arg,
    bundler = require('bundler.js'),
    config  = null,
    mode    = null;

// process arguments.
if (argv.length > 2){
	arg    = argv[2];
	config = arg.substring(-5) === '.json' ? arg : arg + '.json';
}
if (argv.length > 3){
	mode = argv[3];
}

bundler.bundle(config, null, mode);
