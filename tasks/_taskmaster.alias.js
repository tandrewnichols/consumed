module.exports = {
  mocha: ['mochaTest:test'],
  default: ['eslint:lib', 'mocha', 'testem:ci:browser'],
  coverage: ['istanbul:unit', 'open:coverage'],
  ci: ['default', 'travisMatrix'],
  build: ['clean:dist', 'uglify:dist', 'copy:dist'],
  browser: ['testem:run:browser']
};
