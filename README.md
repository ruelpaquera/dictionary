ground:dictionary [![Build Status](https://travis-ci.org/GroundMeteor/dictionary.png?branch=master)](https://travis-ci.org/GroundMeteor/dictionary)
===============

This is a small package that adds scope `Dictionary`
* add(value) *Adds a word to the dictionary returns index*
* addList(listArray) *Adds an array of words to the dictionary*
* set(list) *Sets the dictionary to a list of words*
* withoutInitial *Returns list of words except those added at creation eg. `var d = new Dictionary('foo', 'bar');` foo+bar will not be returned*
* value(index) *get value at index*
* index(value) *get index for value*
* exists(value) *returns true if value exists in dictionary*
* clone *clones the list and returns the list of words*
* getArray *returns the list of words in the dictionary*
* getLookup *returns the word lookup object*

## Usage
In short:
```js
  var d = new Dictionary('foo', 'bar');
  d.add('hello');
  d.withoutInitial(); // returns ['hello']
  d.value(0); // return 'foo'
  d.index('bar'); // return 1
  d.exists('foo'); // return true
  d.exists('FOO');  // return false
  d.clone(); // return cloned word list ['foo', 'bar', 'hello']
  d.getArray(); // return the word list ['foo', 'bar', 'hello']
  d.getLookup(); // return { 'foo': 0, 'bar': 1, 'hello': 2 }
```


## Where is this used?
This is part of the MiniMax package where MiniMax uses a dictionary to compress data.

