function extractValue(arr, key){
    return arr.reduce((acc,nextValue)=>{
        acc.push(nextValue[key]);
        return acc;
    },[]);
}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
console.log(extractValue(arr,'name'));

function vowelCount(str){
   return str.toLowerCase().split("").reduce((acc,nextValue)=>{
      if(("aeiou".indexOf(nextValue)!==-1))
      {
          if(nextValue in acc)
          {
              acc[nextValue]++;
          }
          
          else
          {
              acc[nextValue]=1;
          }
      }
      
      return acc;
   },{})
}

console.log(vowelCount('Elie'));
console.log(vowelCount('I Am awesome and so are you'));

function addKeyAndValue(arr, key, value){
    return arr.reduce((acc,nextValue,index)=>{
        acc.push(nextValue);
        acc[index][key] = value;
        return acc;
    },[])   
}

console.log(addKeyAndValue(arr, 'title', 'Instructor'));

function partition(arr, callback){
	return arr.reduce((acc,nextValue)=>{
		if(callback(nextValue)){
			acc[0].push(nextValue);
		}

		else{
			acc[1].push(nextValue);
		}

		return acc;
	},[[],[]])    
}

function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
console.log(partition(names, isLongerThanThreeCharacters));