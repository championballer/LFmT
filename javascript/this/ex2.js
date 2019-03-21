function invokeMax(fn, num){
    let counter = 0;
    
    return function(){
		counter++;
        if(counter>num)return "Maxed out!";
        else
        {
        	let tosend = [].slice.call(arguments);
    		return(fn.apply(this,tosend));
        }
    }
}

function add(a,b){
        return a+b
    }

var addOnlyThreeTimes = invokeMax(add,3);
console.log(addOnlyThreeTimes(1,2)); // 3
console.log(addOnlyThreeTimes(2,2)); // 4
console.log(addOnlyThreeTimes(1,2)); // 3
console.log(addOnlyThreeTimes(1,2)); // "Maxed Out!"
