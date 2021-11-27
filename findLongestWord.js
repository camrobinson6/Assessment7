function findLongestWord(str)
{

//The match() method is used to retrieve the matches when matching a string against a regular expression.
//Therefore str.match(/\w[a-z]{0,}/gi) will return ["Hi", "Hello"].
  
let array = str.match(/\w[a-z]{0,}/gi);
  let result = array[0];

  for(let x = 1 ; x < array.length ; x++)
  {
    if(result.length < array[x].length)
    {
    result = array[x];
    } 
  }
  return result;
}
//Cameron is the longest name
console.log(findLongestWord("hi","Hello"));
console.log(findLongestWord("Cameron","Edrea"));