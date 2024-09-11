let max = prompt('Please enter a maximum Integer Number');

let random = Math.floor (Math.random()*max)+1;

// console.log(random);

let guess = prompt("please guess a number");


while (true){
    if (guess == 'quit'){
        alert('you quit');
        break;
    }

    else if(guess == random){
        alert('Congrats you have won the game');
        break;
    }

    else if(guess > random){
        console.log('Wrong guess! Please try again ');
        console.log('Hint: You have entered a larger number');
        guess = prompt("please guess a number");
    }

    else{
        console.log('Wrong guess! Please try again ');
        console.log('Hint: You have entered a smaller number');
        guess = prompt("please guess a number");
    }
}


