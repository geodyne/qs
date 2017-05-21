var assert = require('assert');

var qs = require('../')

describe('Decode string', function () {
  it('should decode all elements', function () {
    assert.deepEqual( qs.decode("a=123&b=1"), {a: 123, b: 1});
  });

  it('return unassigned element as null', function () {
    assert.deepEqual( qs.decode("a=123&b"), {a: 123, b: ""});
  });


  
});
