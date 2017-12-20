
'use strict';


module.exports = function (grunt) {

    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jekyll: {
           build : {
               dest: '_site'
           }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/src/main.css': '_sass/main.scss'
                }
            }
        },

        //do some clever stuff to the css file such as minify and autoprefix it.
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 4 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                files: {
                    'assets/dist/main-min.css': 'assets/src/main.css'
                }
            }
        },

        //transpiles es6 to es5
        babel: {
            options: {
                sourceMap: true,
                presets: ['env']
            },
            dist: {
                files: {
                  'assets/src/main-transpiled.js': 'assets/src/main.js'
                }
            }
        },

        //minifying and concatinating
        uglify: {
            dist: {
                files: {
                  'assets/dist/main-min.js': [
                    'node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js',
                    'assets/src/main-transpiled.js'
                    ]
                }
            }
        },

        //autoreload browser and access it from different devices
        browserSync: {
            bsFiles: {
                src : ['_site']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                }
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss, sass}'],
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.html', '_data/*.yml', '*.html', '_sass/**/*.{scss, sass}', '_includes/*.svg', 'assets/*.js'],
                tasks: ['jekyll']
            }
        }

    });

    // Register the grunt serve task
    grunt.registerTask('dev', ['jekyll', 'sass', 'browserSync', 'watch']);

    //setting jekyll variable to production in order to serve different asset files
    grunt.registerTask('jekyll-production', function() {
     grunt.log.writeln('Setting environment variable JEKYLL_ENV=production');
     process.env.JEKYLL_ENV = 'production';
    });

    grunt.registerTask('prod', ['jekyll-production', 'jekyll', 'sass', 'postcss', 'uglify', 'babel', 'browserSync', 'watch' ]);

};
