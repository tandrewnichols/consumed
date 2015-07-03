(function() {
  var Consumed = function(str) {
    this.str = str;
  };

  Consumed.prototype._updateString = function(replacement) {
    this.str = this.str.replace(replacement, '');
  };

  Consumed.prototype.consumeTill = function(c, inclusive) {
    var str = this.str.substring(0, this.str.indexOf(c) + (inclusive ? 1 : 0));
    this._updateString(str);
    return str;
  };

  Consumed.prototype.consume = function(pattern) {
    var match = this.str.match(pattern);
    if (match) {
      this._updateString(pattern);
      return match[0];
    }
  };

  if (typeof module === 'object' && module.exports) {
    module.exports = Consumed;
  }

  if (typeof window !== 'undefined') {
    window.Consumed = Consumed;
  }
})();
