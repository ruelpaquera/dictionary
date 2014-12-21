var _splice = function(array, begin) {
  var result = [];

  begin = begin || 0;

  // Add the ones we need
  for (var i = begin; i < array.length; i++)
    result.push(array[i]);

  return result;
};

Dictionary = function(list) {
  var self = this;
  // Dictionary
  self.lookup = {};
  self.lookupDate = {}; // Special lookup making sure date lookups are acurate

  self.list = [];

  self.initial = [];

  // If user sets a list
  if (list instanceof Dictionary) {
    // Clone the initial list
    self.initial = list.clone();
    // We set the clone
    self.set(list.clone());
  } else if (list) {
    // Clone the array
    self.initial = _splice(list);
    // Just set the list
    self.set(list);
  }

};

Dictionary.prototype.add = function(value) {
  var self = this;
  // Make sure not to add existing values / words
  if (!self.exists(value)) {
    // Add value to keyword list
    // We return the index - note this can be 0 :)
    if (value instanceof Date) {
      var index = this.list.push(value) - 1;
      // Set the normal lookup
      this.lookup[value] = index;
      // Set the value in the date lookup in order not to conflict with number
      // lookups
      this.lookupDate[+value] = index;
    } else {
      this.lookup[value] = this.list.push(value) -1;
    }
  }

  return this.index(value);
};

Dictionary.prototype.addList = function(list) {
  // Iterate over the list of values
  if (list)
    for (var i = 0; i < list.length; i++)
      this.add(list[i]);
};

Dictionary.prototype.set = function(list) {
  // Reset the this.lookup
  this.lookup = {};
  this.lookupDate = {};
  this.list = [];
  // Add the list
  this.addList(list);
};

Dictionary.prototype.remove = function(value) {
  var self = this;
  // Make sure theres something to remove
  if (self.exists(value)) {
    var result = [];
    // copy the this.lookup
    for (var i = 0; i < this.list.length; i++)
      if (i !== self.index(value)) result.push(this.list[i]);
    // Set the new list of this.lookup
    this.set(result);
  }
};

Dictionary.prototype.withoutInitial = function() {
  return _splice(this.list, this.initial.length);
};

Dictionary.prototype.value = function(index) {
  return this.list[index];
};

Dictionary.prototype.index = function(value) {
  // We have to use the Date lookup in order to get the correct lookup value
  // otherwise there are some slight diviation in the result - We want this
  // 100% accurate
  if (value instanceof Date) {
    return this.lookupDate[+value];
  } else {
    return this.lookup[value];
  }
};

Dictionary.prototype.exists = function(value) {
  return (typeof this.index(value) !== 'undefined');
};

Dictionary.prototype.clone = function() {
  return _splice(this.list);
};

Dictionary.prototype.toArray = function() {
  return this.list;
};

Dictionary.prototype.toObject = function() {
  return this.lookup;
};
