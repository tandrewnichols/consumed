module.exports = Consumer = function(str) {
  this.str = str;
};

Consumer.prototype.consume = function(pattern, inclusive) {
  if (typeof pattern === 'string') {
    if (pattern.length === 1) {
      var str = this.str.substring(0, this.str.indexOf(pattern) + (inclusive ? 1 : 0));
      this.str = this.str.replace(str, '');
      return str;
    } else {
      this.str = this.str.replace(pattern, '');
      return pattern;
    }
  } else {
    var match = this.str.match(pattern);
    if (match) {
      this.str = this.str.replace(pattern, '');
      return match[0];
    }
  }
};
