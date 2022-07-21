// A set is a data structure that allows you to store unique values inside of an object
// You are not able to pass in duplicate values inside of a set
const set = new Set([1,2,3,4,5]);


// You are able to use the different methods at your disposal to work with sets
// one of them being the add method which allows you to add another value inside of a set
set.add(6)
console.log(set)



// A map is an unordered collection of key-value pairs
const map = new Map([["a", 1], ["b",2]])
map.set('c', 3)
map.delete('c')
console.log(map.has('c'))
console.log(map.size)


map.clear()

for (const [key,value] of map) {
    console.log(`${key}, ${value}`)
}
