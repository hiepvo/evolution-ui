module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    concat: {
      js: {
        src: ['assets/scripts/*/*.js'],
        dest: 'production/main.js'
      }
    },
    sass: {
      compile: {
        options: {
          update: true
        },
        files: [{
          src: 'assets/stylesheets/main.scss',
          dest: 'production/main.css'
        }]
      }
    },
    uglify: {
      build: {
        files: [{
          src: ['assets/scripts/*/*.js'],
          dest: 'production/main.min.js'
        }]
      }
    },
    watch: {
      css: {
        files: [
          'assets/stylesheets/*/*.scss',
          'assets/stylesheets/*/*/*.scss',
          'assets/stylesheets/*/*/*/*.scss'
        ],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['assets/scripts/*/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register tasks
  grunt.registerTask('build', ['uglify', 'sass']); // 'grunt build' to run this
  grunt.registerTask('default', ['concat', 'sass', 'watch']); // 'grunt' to run this

}
