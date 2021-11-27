function sumZero(array, ) {
    let sum = [];
      // check each element in array
    for (let i = 0; i < array.length; i++){
      // check each other element in the array  
    for (let j = i + 1; j < array.length; j++){

//comparing the two 
        if (array[i] + array[j] === 0) {
            sums.push([array[i], array[j]]);

     return true
        }
else {
        return false
    }
}
    }
    }
    console.log(sumZero([3, 5, 2, 8, 9]));

