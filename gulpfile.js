var gulp = require( 'gulp' );
var tar = require( 'gulp-tar' );
var gzip = require( 'gulp-gzip' );
var tmpl = require( 'gulp-template' );
var shasum = require( 'shasum' );
var gulpFilter = require('gulp-filter');
var path = require( 'path' );

//var filter = gulpFilter([ './bin/*', './libexec/*', './completions/*' ]);

var filter = gulpFilter(
  function (file) {
    var relative = path.relative( ".", file.path );
    var match = /^bin|libexec|completions\/.*$/.test(relative);
    return match;
  }
);

var version = require( './package.json' ).version;

gulp.task( 'dist', function () {
  return gulp.src( '**/*' )
    .pipe( filter )
    .pipe( tar( 'jsenv-' + version + '.tar' ) )
    .pipe( gzip() )
    .pipe( gulp.dest( './dist' ) );
} );

gulp.task( 'conf', [ 'dist' ], function () {
  var version = require( './package.json' ).version;
  gulp.src( './tmpl/jsenv.rb' )
    .pipe( tmpl( {
      version : version,
      shasum  : shasum( require( 'fs' ).readFileSync( './dist/jsenv-' + version +  '.tar.gz' ) )
    } ) )
    .pipe( gulp.dest( '.' ) );
} );

gulp.task( 'install', function() {

} );

gulp.task( 'build', ['dist', 'conf'] );