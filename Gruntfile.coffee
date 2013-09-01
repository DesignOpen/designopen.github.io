'use strict'
path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point) ->
  return connect.static(path.resolve(point))


module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    stylus:
      compile:
        options:
          compress: false
        files:
          'css/main.css': 'css/main.styl'
          'css/reset.css': 'css/reset.styl'
    jade:
      options:
        pretty: true
      compile:
        files:
          'index.html': 'index.jade'
    coffee:
      compile:
        files:
          'js/main.js': 'js/main.coffee'
    connect:
      livereload:
        options:
          hostname: '0.0.0.0'
          port: 9001
          middleware: (connect, options) ->
            return [lrSnippet, folderMount(connect, '.')]
    regarde:
      stylus:
        files: ['css/*.styl']
        tasks: ['stylus', 'livereload']
      jade:
        files: ['*.jade']
        tasks: ['jade', 'livereload']
      coffee:
        files: ['js/*.coffee']
        tasks: ['coffee', 'livereload']
      image:
        files: ['img/*']
        tasks: ['livereload']

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-stylus')
  grunt.loadNpmTasks('grunt-contrib-jade')
  grunt.loadNpmTasks('grunt-regarde')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-livereload')

  # Default task(s).
  grunt.registerTask('compile', ['coffee','stylus','jade'])
  grunt.registerTask('default', ['compile', 'livereload-start', 'connect', 'regarde'])