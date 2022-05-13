require 'set'

def find_first_duplicate(arr)
  uniques = Set.new

  arr.each do |v|
    return v if uniques.include?(v)

    uniques.add(v)
  end

  -1

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts "Expecting: 5"
  puts "=>", find_first_duplicate([1, 4, 5, 3, 5, 8, 7, 6])
end

# Initialize an empty set (sets only contain unique values). Loop through the array
# checking if the value is in the set. If so, return the value. If no duplicate
# is found, return -1.

# Sets only contain unique values. If a value in the array is in the set, it 
# is a duplicate. The first duplicate found should be returned.