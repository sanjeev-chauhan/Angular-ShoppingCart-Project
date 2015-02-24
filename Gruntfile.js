module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	csslint: {
		options: {
			absoluteFilePathsForFormatters: true,
			force:true,
			formatters: [
				{id: 'text', dest: 'lint/csslint.txt'},
				{id: 'csslint-xml', dest: 'lint/csslintl.xml'}]
		},
		src: 'app/css/app.css',
	},
	cssmin: {
		minify: {
			//src: 'app/css/*.css',
			src:['app/css/bootstrap.css','app/css/app.css'],
			dest: 'build/<%= pkg.name %>.min.css',
			ext: '.min.css'
		}
	},
	jshint: {
		options: {
			force:true,
			reporter: require('jshint-stylish'),
			reporterOutput:'lint/jsHintOutput.js'
		},
		all: ['Gruntfile.js', 'app/scripts/**/*.js']
	},
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			src: 'app/scripts/**/*.js',
			dest: 'build/<%= pkg.name %>.min.js'
		}
	}
});

	//Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Default task(s).
	grunt.registerTask('default', ['jshint','cssmin','uglify']);

};