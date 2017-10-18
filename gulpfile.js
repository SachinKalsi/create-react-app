var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var envify = require('envify/custom');
var watchify = require('watchify');
var reactify = require('reactify');
var gls = require('gulp-live-server');
var babel  = require('gulp-babel');
var es = require('event-stream');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var es2015 = require('babel-preset-es2015');

// Load the environment variables.
require('./config/read_env');


var BUILD_PATH = './dist/admin';
var server = null;

function browserifyThis(config) {
    var entry = config.entry,
        dest = config.dest,
        outputName = config.outputName,

        // During build we want to build the react packages based on NODE_ENV
        // value despite value of DEPLOYMENT. If not, then we may end up
        // building the react package in "staging" mode which is use the
        // test email addresses when then gets deployed to production (see
        // constants-contacts.js).
        envifyOptions = {
            _: 'purge',
            NODE_ENV: process.env.NODE_ENV,
            DEPLOYMENT: process.env.NODE_ENV
        };

    var bundler = browserify({
        entries: entry,
        transform: [reactify],
        extensions: ['.jsx'],
        debug: global.isWatching,
        cache: {},
        packageCache: {},
        fullPaths: true
    })
        .transform(envify(envifyOptions), {global: true});

    var bundle = function() {
        // Log when bundling starts

        return bundler
            .bundle()
            .on('error', function(e) {
                console.log(e.message);
            })
            .pipe(source(outputName))
            .pipe(gulp.dest(dest));
    };

    if (global.isWatching) {
        bundler = watchify(bundler);

        bundler.on('update', function() {
            console.log('Re-bunding');
            bundle();
        });
    }

    return bundle();
}

gulp.task('build', function() {
    if (!global.hasOwnProperty('isWatching')) {
        global.isWatching = false;
    }

    var bundleConfigs = [{
        entry: './client/app.jsx',
        dest: BUILD_PATH + '/app/js',
        outputName: 'app-admin.js'
    }];

    var bundlerTasks = bundleConfigs.map(browserifyThis);

    return es.merge.apply(null, bundlerTasks);
});

gulp.task('copy', function() {
    return gulp.src('public/**')
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function() {
    var liveReload = false,
        serverParams = ['./server.js'];

    server = gls.new(serverParams, undefined, liveReload);
    server.start();
    global.server = server;
});

gulp.task('re-serve', function() {
    global.server.start.apply(server);
});



gulp.task('compress', ['build'], function() {
    return gulp.src(BUILD_PATH + '/app/js/*.js')
        .pipe(babel({compact: false, presets: ['es2015']}))
        .pipe(uglify())
        .on('error', function(e){
            console.log(e);
        })
        .pipe(gulp.dest(BUILD_PATH + '/app/js'));
});


gulp.task('setWatch', function() {
    global.isWatching = true;
    return;
});

gulp.task('watch', ['convert', 'setWatch', 'build', 'copy', 'serve'], function() {
    gulp.watch('app/**/*.js', ['re-serve']);
    gulp.watch('files/**/*', ['copy']);
});

gulp.task('browserSync', ['watch'], function() {
    var opts = {
        files: [
            BUILD_PATH + '/**'
        ],
        startPath: '/login',
        minify: false
    };
    browserSync.init(opts);
});

gulp.task('convert', function () {
    return gulp.src(BUILD_PATH + '/app/js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('dist'));
});

gulp.task('dev', ['watch']);
gulp.task('prod', ['convert', 'build', 'copy', 'compress']);
gulp.task('default', ['prod']);
