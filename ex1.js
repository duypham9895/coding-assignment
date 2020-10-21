

/**
 * EXERCISE 1
 * Firstly, loop all elements in an array and put them to a dictionary which format {key: value}. The key is a number in the array,
 * and the value is a number of appearances of the key in this array.
 * Secondly, loop all objects in the dictionary and push them into a Result array if value of them equal 1.
 */

let input_arr = []

for(var i = 0; i<1000000; i++){
    if(i === 1000000-1){
        input_arr.push(i)
    } else {
        input_arr.push(i)
        input_arr.push(i)
        input_arr.push(i)
    }
}


// input_arr = [3, 1, 3, 3, 1, 1, 8, 8, 17, 8]
let dict_arr = {}
let result_1 = []

let start = new Date().getTime();

// /**
//  * Put all elements in this array to dictionary which format {key: value}
//  * key: number in the array
//  * value: a number of appearances of the key in this array.
//  */
for(let num of input_arr){
    if(dict_arr[num] !== undefined){
        dict_arr[num] += 1
    }else {
        dict_arr[num] = 1
    }
}

// /**
//  * Pushing a key into a Result array if value of them equal 1.
//  */
for (let key in dict_arr){
    if(dict_arr[key] === 1){
        result_1.push(parseInt(key))
        break
    }
}

let end = new Date().getTime();
let time = end - start;

console.log("Size of an array: ", input_arr.length)
console.log('Execution time of Exercise 1: ' + time/1000);
console.log('Result of Exercise 1: ', result_1)