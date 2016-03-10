/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name: "medium",
            width: 640,
            suffix: "_1x",
            quality: 80
          },{
            name: "medium",
            width: 1280,
            suffix: "_2x",
            quality: 80
          },{
            name: "small",
            width: 320,
            suffix: "_1x",
            quality: 80
          },{
            name: "small",
            width: 640,
            suffix: "_2x",
            quality: 80
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: '_images/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: '_images/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    shell: {
    	build: {
    		command: 'jekyll build',
    	},
    	serve: {
    		command: 'jekyll serve',
    	},
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'shell']);

};
