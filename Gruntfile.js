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
						'assets/libs/codemirror/codemirror-5.31.0/mode/javascript/javascript.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/foldcode.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/foldgutter.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/comment-fold.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/xml-fold.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/indent-fold.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/brace-fold.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/edit/matchtags.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/edit/closetag.js',
						'assets/libs/codemirror/codemirror-5.31.0/addon/comment/comment.js',
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/jquery-resizable/resizable.js',
					],
					'./public/style/vendor.css' : [
						'node_modules/bootstrap/dist/css/bootstrap.min.css',
						'assets/libs/codemirror/codemirror-5.31.0/lib/codemirror.css',
						'assets/libs/codemirror/codemirror-5.31.0/theme/material.css',
						'assets/libs/codemirror/codemirror-5.31.0/addon/fold/foldgutter.css',
						'node_modules/jquery-resizable/resizable.css'
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