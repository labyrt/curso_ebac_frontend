module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: false,
                    sourceMap: true,
                    sourceMapFilename: 'dist/styles/main.css.map',
                    sourceMapURL: 'main.css.map'
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | JavaScript comprimido com Grunt */\n'
            },
            production: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/main.js']
                }
            }
        },

        watch: {
            styles: {
                files: ['src/styles/**/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'uglify']);
};
