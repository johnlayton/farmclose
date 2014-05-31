var gulp = require( 'gulp' );
var tmpl = require( 'gulp-template' );
var shasum = require( 'shasum' );
var path = require( 'path' );
var spawn = require( 'child_process' ).spawn;

var version = require( './package.json' ).version;

gulp.task( 'default', function () {
  tar = spawn( 'tar', ['-cpvzf', 'dist/jsenv-' + version + '.tar.gz', 'bin', 'libexec', 'completions'] );
  tar.on( 'close', function( code ) {
    var version = require( './package.json' ).version;
    var filename = './dist/jsenv-' + version + '.tar.gz';
    var contents = require( 'fs' ).readFileSync( filename );
    gulp.src( './tmpl/jsenv.rb' )
      .pipe( tmpl( {
        version : version,
        shasum  : shasum( contents )
      } ) )
      .pipe( gulp.dest( '.' ) );
  } );
} );
