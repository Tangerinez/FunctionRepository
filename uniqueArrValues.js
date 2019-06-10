let unique = ar.filter(function(elem, index, self) {
  return index === self.indexOf(elem);
});

// returns an array with all the unique values
