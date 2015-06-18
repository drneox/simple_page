module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        //

        express: {
            all: {
                options: {
                    bases: ['/Users/you/base'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true,
                    debug: true
                }
            }
        },

        watch: {
            all: {
                files: ['**/*.html','**/*.js', '**/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:8080/index.html'
            }
        }



    });

// loadNpmTasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('start', ['express', 'express-keepalive']);
    grunt.loadNpmTasks('grunt-open');


// Run Default task(s).
    grunt.registerTask('server', ['express', 'open','watch']);
};
