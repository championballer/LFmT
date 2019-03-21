function guessingGame(amount){
    let answer = Math.floor(Math.random()*10);
    let current = 0;
    let flag = 0;
    return (guess)=>{
        if(current===amount)
        {
            return "You are done playing!";
        }
        else if(guess===answer)
        {
            current++;
            return "You got it"
            
        }
        else if(guess<answer)
        {
            current++;
            if(current===amount)
            {
                return "No more guesses the answer was "+answer;
            }
            else return "You're too low!"
            
        }
        else
        {
            current++;
            if(current===amount)
            {
                return "No more guesses the answer was "+answer;
            }
            else return "You're too high!"
        }
    }
}

var game = guessingGame(5);
console.log(game(1)); // "You're too low!"
console.log(game(8)); // "You're too high!"
console.log(game(5)); // "You're too low!"
console.log(game(7)); // "You got it!"
console.log(game(1)); // "You are all done playing!"

var game2 = guessingGame(3);
console.log(game2(5)); // "You're too low!"
console.log(game2(3)); // "You're too low!"
console.log(game2(1)); // "No more guesses the answer was 0"
console.log(game2(1)); // "You are all done playing!"