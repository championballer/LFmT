/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach((element,index,arr)=>{
        newArr.push(element*2);
    });
    return newArr;
}

let arr = doubleValues([1,2,3]);
console.log(arr);

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach((element)=>{
        if(element%2===0)
        {
            newArr.push(element);   
        }
    });
    return newArr;
}

arr = onlyEvenValues([5,1,2,3,10]);
console.log(arr);
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach((element,index,arr)=>{
        let str = "";
        str+=(element[0]+element[element.length-1]);
        newArr.push(str);
    });
    
    return newArr;
}
arr = showFirstAndLast(['colt','matt', 'tim', 'udemy']);
console.log(arr);
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach((element)=>{
        let current = element;
        current[key]=value;
        newArr.push(current);
    });
    
    return newArr;
}

arr = addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') ;
console.log(arr);
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   str = str.toLowerCase();
   let result = {};
   for(let i=0;i<str.length;i++)
   {    
        let element = str[i];
        if(element==='a' || element ==='e' || element === 'o' || element === 'i' || element ==='u')
        {
            if(element in result)
            {
                result[element]++;    
            }

            else
            {
                result[element]=1;
            }
            
        }
   }
    
    return result;
}

let ans = vowelCount('I Am awesome and so are you');
console.log(ans);