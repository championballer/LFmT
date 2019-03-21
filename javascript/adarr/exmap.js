function extractKey(arr, key){
    return arr.map((value)=>{
        return value[key];
    });
}

let arr = extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');

console.log(arr);