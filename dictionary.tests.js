"use strict";

function equals(a, b) {
  return !!(JSON.stringify(a) === JSON.stringify(b));
}

Tinytest.add('Dictionary - test', function(test) {
  var dict = new Dictionary(['a', 'b']);
  dict.addList(['c', 'd']);
  dict.add('e');
  test.isTrue(equals(dict.getArray(), ['a','b','c','d','e']), 'Result is not as expected');
  dict.remove('c');
  test.isTrue(equals(dict.getArray(), ['a','b','d','e']), 'Result is not as expected');
  test.equal(dict.index('b'), 1, 'Index not working');
  test.isTrue(dict.exists('a'));
  test.isFalse(dict.exists('c'));
  test.isTrue(equals(dict.clone(), ['a','b','d','e']), 'Result is not as expected');
  test.isTrue((dict.getArray() !== dict.clone()), 'Should not be the same');
  test.isTrue((dict.value(0)  == 'a'), 'Should be a...');
  test.isTrue(equals(dict.withoutInitial(), ['d','e']), 'withoutInitial not working...');
});


//Test API:
//test.isFalse(v, msg)
//test.isTrue(v, msg)
//test.equalactual, expected, message, not
//test.length(obj, len)
//test.include(s, v)
//test.isNaN(v, msg)
//test.isUndefined(v, msg)
//test.isNotNull
//test.isNull
//test.throws(func)
//test.instanceOf(obj, klass)
//test.notEqual(actual, expected, message)
//test.runId()
//test.exception(exception)
//test.expect_fail()
//test.ok(doc)
//test.fail(doc)
//test.equal(a, b, msg)
