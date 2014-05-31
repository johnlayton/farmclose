var gulp = require( 'gulp' );
//var tar = require( 'gulp-tar' );
//var gzip = require( 'gulp-gzip' );
//var filter = require('gulp-filter');
var tmpl = require( 'gulp-template' );
var shasum = require( 'shasum' );
var path = require( 'path' );
var spawn = require( 'child_process' ).spawn;

//var files = filter(
//  function ( file ) {
//    var relative = path.relative( ".", file.path );
//    var match = /^bin|libexec|completions\/.*$/.test( relative );
//    return match;
//  }
//);

var version = require( './package.json' ).version;

gulp.task( 'dist', function () {
  //gulp.src( '**/*' )
  //  .pipe( files )
  //  .pipe( tar( 'jsenv-' + version + '.tar' ) )
  //  .pipe( gzip() )
  //  .pipe( gulp.dest( './dist' ) );
  tar = spawn( 'tar', ['-cpvzf', 'dist/jsenv-' + version + '.tar.gz', 'bin', 'libexec', 'completions'] );
  tar.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
  tar.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });
} );

gulp.task( 'conf', ['dist'], function () {
  var version = require( './package.json' ).version;
  gulp.src( './tmpl/jsenv.rb' )
    .pipe( tmpl( {
      version : version,
      shasum  : shasum( require( 'fs' ).readFileSync( './dist/jsenv-' + version + '.tar.gz' ) )
    } ) )
    .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'install', function () {

} );

gulp.task( 'build', ['dist', 'conf'] );