function findFirstDuplicate(arr) {
  const uniques = new Set();

  for (let v of arr) {
    if (uniques.has(v)) {
      return v;
    }
    uniques.add(v);
  }
  return -1;
}

if (require.main === module) {
  
  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([1, 4, 3, 5, 6, 7, 8, 5]));

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Initialize empty set, then loop through the array. If the set contains 
// the current value, return the current value. Else, return -1.

// Sets only contain unique values. If the set contains the current element
// of the array, then it is a duplicate. The first duplicate to be found should
// be returned.