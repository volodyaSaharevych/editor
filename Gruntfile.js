module.exports = function( grunt ) {
	
    grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		concat: {
			dist: {
				options: {},
				files: {
					'./public/js/vendor.js': [
                        'assets/libs/codemirror/codemirror-5.31.0/lib/codemirror.js',
                        'assets/libs/codemirror/codemirror-5.31.0/mode/xml/xml.js',
                        'assets/libs/codemirror/codemirror-5.31.0/mode/htmlmixed/htmlmixed.js',
                        'assets/libs/codemirror/codemirror-5.31.0/mode/css/css.js',
                        'assets/libs/codemirror/codemirror-5.31.0/mode/javascript/javascript.js'
					],
					'./public/style/vendor.css' : [
						'node_modules/bootstrap/dist/css/bootstrap.min.css',
						'assets/libs/codemirror/codemirror-5.31.0/lib/codemirror.css',
						'assets/libs/codemirror/codemirror-5.31.0/theme/material.css'
					]
				}
			}
		}
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.registerTask('default', [ 'concta' ], function(){
    	grunt.task.run( 'concat' );
    });

};