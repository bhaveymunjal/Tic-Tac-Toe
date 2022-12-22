console.log("Is Javascript Working")
let click = new Audio("click.mp3");

let turn = 'X';

// Function to change turn of player
function changeturn(){
    if(turn=='X')
        return 'O';
    return 'X';
}
function reset_(){
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".text");
    boxtext.innerText = "";
    turn = 'X';
    })
}
// Function to check if player wins
function checkWin(){
    let boxtext = document.getElementsByClassName("text");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[2]].innerText==boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!="")){
            let ans = document.getElementsByClassName("result")
            console.log( boxtext[e[0]].innerText + " Won")
            document.querySelector('.container').style.display="none";
            document.querySelector('.result').style.display="block";
            document.querySelector(".answer").innerHTML = `${boxtext[e[0]].innerText}  Won`;    
            // reset_();
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".text");
    element.addEventListener("click",()=>{
        if(boxtext.innerText == ""){
            boxtext.innerText = turn;
            turn = changeturn();
            click.play();
            checkWin();
        }
    })
})

let play = document.getElementById('play');
play.addEventListener("click",function(){
   document.querySelector('.game').style.display="grid";
   document.querySelector('.reset').style.display="inline";
   document.querySelector('#play').style.display="none";

})

let reset = document.querySelector('.reset')
reset.addEventListener("click",reset_)

let Again = document.querySelector('.playAgain');
Again.addEventListener("click",function(){
    document.querySelector('.container').style.display="flex";
    reset_();
    document.querySelector('.game').style.display="grid";
    document.querySelector('.reset').style.display="inline";
    document.querySelector('#play').style.display="none";
    document.querySelector('.playAgain').style.display="none";
    document.querySelector(".answer").innerHTML =""
 
 })
