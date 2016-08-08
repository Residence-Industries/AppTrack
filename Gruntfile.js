module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'babel-register'
        },
        src: ['test/client/**/*.js', 'test/integration/**/*.js', 'test/client/**/*.js']
      }
    },

    // code coverage settings
    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: './test/coverage/instrument/app/'
      }
    },

    instrument: {
      files: 'client/**/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },

    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }

  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-istanbul');

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('coverage', [
    'env:coverage',
    'instrument',
    'mochaTest',
    'storeCoverage',
    'makeReport'
  ]);
}
