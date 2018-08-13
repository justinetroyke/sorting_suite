const assert = require('chai').assert
const sort = require('../merge-sort')

describe("Merge Sort", function(){
  it("can sort an array", function(){
    assert.deepEqual(sort([7,2,8,0]), [0,2,7,8])
  });
});
