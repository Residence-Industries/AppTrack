module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        seperator: ';'
      },
      dist: {
        src: [
          'client/**/*.js'
        ],
        dest: 'build/production.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'build/production.min.js': ['public/production.js']
        }
      }
    },

    sass: {
      dist: {
        files: {
          // destination: source
          'client/styles/styles.css': 'client/styles/styles.scss'
        }
      }
    },

    cssmin: {
      my_target: {
        files: {
          'build/styles.min.css': 'client/styles/styles.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'sass',
    'cssmin'
  ]);
}
