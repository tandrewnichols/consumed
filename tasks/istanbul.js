module.exports = {
  unit: {
    options: {
      root: 'tasks',
      dir: 'coverage',
      simple: {
        cmd: 'cover',
        args: ['grunt', 'mocha'],
        rawArgs: ['--', '--color']
      }
    }
  }
};
