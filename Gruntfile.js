module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/resources/jquery-1.8.3.min.js',
        'public/bootstrap/bootstrap.min.js',
        'public/resources/jquery.watable.js',
        'public/resources/crypto.js',
        'public/resources/knockout_full.js',
        'public/resources/knockout.mapping.js',
        'public/resources/dateformat.js',
        'public/resources/jquery.cookie.js',
        'public/bootstrap/bootstrap-datepicker.js',
        'public/bootstrap/bootstrap-modal.js',
        'public/bootstrap/bootstrap-tooltip.js',
        'public/bootstrap/bootstrap-popover.js',
        'public/bootstrap/bootstrap-tour.js',
        'public/resources/highcharts.js',
        'public/js/src/utils.js',
        'public/js/src/knockout_objects.js',
        'public/js/src/server_module.js',
        'public/js/src/tour_module.js',
        'public/js/src/chart_objects.js',
        'public/js/src/knockout_viewmodel.js',
        'public/js/src/getInit.js',
        'public/js/src/CSVparser.js'
        ],
        dest: 'public/js/dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/js/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'public/js/src/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint',]);

  grunt.registerTask('default', ['concat']);

};