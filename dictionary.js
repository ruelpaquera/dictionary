Dictionary = function(list) {
  var self = this;
  // Dictionary
  self.lookup = {};
  self.list = [];

  // If user sets a list
  if (list instanceof Dictionary) {
    // We set the clone
    self.set(list.clone());
  } else if (list) {
    // Just set the list
    self.set(list);
  }

  if (list)
    self.initialLength = list.length;
};

Dictionary.prototype.add = function(value) {
  var self = this;
  // Make sure not to add existing values / words
  if (!self.exists(value)) {
    // Add value to keyword list
    // We return the index - note this can be 0 :)
    return this.lookup[''+value] = this.list.push(value) -1;
  }

  return this.lookup[''+value];
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
  return this.list.slice(this.initialLength || 0);
};

Dictionary.prototype.value = function(index) {
  return this.list[index];
};

Dictionary.prototype.index = function(value) {
  return this.lookup[''+value];
};

Dictionary.prototype.exists = function(value) {
  return (typeof this.index(value) !== 'undefined');
};

Dictionary.prototype.clone = function() {
  return this.list.slice(0);
};

Dictionary.prototype.getArray = function() {
  return this.list;
};

Dictionary.prototype.getLookup = function() {
  return this.lookup;
};
