function filterByValue(arr, key){
    return arr.filter((object)=>{
        return (key in object);
    });
}

console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
	{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 
	'isCatOwner'));

function find(arr, searchValue){
    return arr.filter((value)=>{
        return value===searchValue;
    })[0];
}

console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5], 10)); 

function findInObj(arr, key, searchValue){
    return arr.filter((value)=>{
        return (key in value && value[key]===searchValue);
    })[0];
}

console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
	{first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 
	'isCatOwner',true));

function removeVowels(str){

	return str.toLowerCase().split("").filter((element)=>{
		return !("aeoiu".includes(element)) 
	}).join("");
	    
}

console.log(removeVowels("hello"));
console.log(removeVowels('Elie')); 
console.log(removeVowels('TIM')); 
console.log(removeVowels('ZZZZZZ'));

function doubleOddNumbers(arr){
    return arr.filter((element)=>{
        return element%2==1;
    }).map((element)=>{
        return element*2;
    });
}

console.log(doubleOddNumbers([1,2,3,4,5]));
console.log(doubleOddNumbers([4,4,4,4,4]));