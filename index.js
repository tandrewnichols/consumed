module.exports = Consumer = function(str) {
  this.str = str;
};

Consumer.prototype.consumeTill = function(c, inclusive) {
  var str = this.str.substring(0, this.str.indexOf(c) + (inclusive ? 1 : 0));
  this.str = this.str.replace(str, '');
  return str;
};

Consumer.prototype.consume = function(pattern) {
  var match = this.str.match(pattern);
  if (match) {
    this.str = this.str.replace(pattern, '');
    return match[0];
  }
};
