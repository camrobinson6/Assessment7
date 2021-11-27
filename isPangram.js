function isPangram(string){
//lowercase the string to check letters in the string easier
let strArr = string.toLowerCase();
// made a variable to hold all the letters in alphabets
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//create a for-loop to loop thru alphabet
for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
        return false;
    }
}
return true;
}
//the first console.log is true and the second console.log is false
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("I like cats, but not mice"))
