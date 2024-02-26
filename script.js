let msg1 = document.getElementById('message1');
let msg2 = document.getElementById('message2');
let msg3 = document.getElementById('message3');
let myBtn = document.getElementById('my_btn')
const myInput = document.getElementById('guess')

let answer = Math.floor(Math.random()*10)+1;

let num_of_guess = 0;
let guessed_nums = [];


function play (){
    let user_guess = document.getElementById('guess').value;
  
  
    if(user_guess < 1 || user_guess >10 ){
        alert("Please enter 1 to 10")
    }else{
        guessed_nums.push(user_guess);
        num_of_guess += 1

        if(user_guess < answer){
            msg1.textContent = 'please to high';
            msg2.textContent = "num_of_guess: "+
            num_of_guess;
            msg3.textContent = 'Guessed number : ' + guessed_nums;
            myInput.value = ''
        }
        else if(user_guess > answer){
            msg1.textContent = 'please to low';
            msg2.textContent = "num_of_guess: " +
            num_of_guess;
            msg3.textContent = 'Guessed number :  ' +  guessed_nums;
           
            myInput.value = ''

        }
    else if(user_guess == answer){
        msg1.textContent = "You Are great!"
        msg2.textContent = 'The number was: '+ answer
        msg3.textContent = 'You guessed this game on  ' +  num_of_guess +  ' attempt';
        myBtn.disabled = true

        myInput.value = ''
      
    }
    }   
}


document.addEventListener("keydown", function(e){
  

    if (e.key === "Enter") {
        document.querySelector("#my_btn").click()
    }
} )



