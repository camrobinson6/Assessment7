function hasUniqueChars(str)
{
     
    // If any of the same characters, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
 
    //no duplicate characters
    //return true
    return true;
}
// first one is false and second one is true
console.log(hasUniqueChars('Camerooon'))
console.log(hasUniqueChars('Cameron'))