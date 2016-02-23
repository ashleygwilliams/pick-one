const assert = require('assert');
const pickOne = require('../');

describe('#pickOne', function() {
  it('should return a randomly element from an array', function () {
    var arr = [1,2,3];
    var result = pickOne(arr);
    assert(arr.indexOf(result) !== -1);
  });
});
