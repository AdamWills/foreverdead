module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {                       // Target options
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		connect: {
			server: {
				options: {
					livereload: true,
					open: true
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default',['connect', 'watch']);
}