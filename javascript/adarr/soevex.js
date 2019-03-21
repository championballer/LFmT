function hasOddNumber(arr){
    return arr.some((element)=>{
        return element%2===1;
    });    
}

// console.log(hasOddNumber([1,2,2,2,2,2,4]));

function hasAZero(num){
    return num.toString().split("").some((element)=>{
        return element==='0';
    });
}

// console.log(hasAZero(3332123213101232321));
// console.log(hasAZero(1212121));

function hasOnlyOddNumbers(arr){
    return arr.every((element)=>{
        return element%2==1;
    });
}

// console.log(hasOnlyOddNumbers([1,3,5,7]));
// console.log(hasOnlyOddNumbers([1,2,3,5,7]));

function hasNoDuplicates(arr){
    return arr.every((element,index,array)=>{
    	return (arr.slice(index+1,array.length).indexOf(element)===-1)
    });
}

console.log(hasNoDuplicates([1,2,3,1]));
console.log(hasNoDuplicates([1,2,3]));

