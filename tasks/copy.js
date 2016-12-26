module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: "./",
        src: "lib/consumed.js",
        dest: "dist/",
        rename: function(dest, src) {
          return dest + 'consumed.js';
        }
      }
    ]
  }
};
