module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: "./",
        src: "index.js",
        dest: "dist/",
        rename: function(dest, src) {
          return dest + 'consumed.js';
        }
      }
    ]
  }
};
