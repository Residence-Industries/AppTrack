module.exports = function(grunt) {
  grunt.initiConfig({
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


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [
    'concat',
    'uglify'
  ]);
}
