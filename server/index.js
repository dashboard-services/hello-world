var express = require( 'express' ),
		app = express(),
		fs = require('fs'),
		path = require( 'path' );

app.get( '/', function( req, res, next ){
	res.set('Content-Type', 'text/html');
	fs.createReadStream( path.join( __dirname, '..', 'client', 'index.html' ) ).pipe( res );
} );

module.exports = app;
