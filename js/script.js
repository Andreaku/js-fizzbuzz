const div5 = 5;
const div3 = 3;
let numString = "<ul>";
const blackboard = document.getElementById("board")
for(let i = 1 ; i <= 100 ; i++){
    if  ((i % div3 == 0) && (i % div5 == 0)){
    numString += `<li id="fb">FizzBuzz</li>`  ;
    } else if (i % div5 == 0){
        numString += `<li id="b">Fizz</li>`
    } else if(i % div3 == 0 ){
        numString += `<li id="f">Buzz</li>`
    }else{
        numString += `<li>${i}</li>`   ;
    }
}

numString += "</ul>";
console.log(numString);
blackboard.innerHTML = numString;