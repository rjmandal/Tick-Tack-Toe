let music = new Audio("music.mp3"); 
let turn = new Audio("ting.mp3"); 
let gameover = new Audio("gameover.mp3"); 
let turn ="X";

// function to change turn

const changeturn =()=>{
    return turn ==="X"?"0":"X"
}

// finction to check for win

const checkwin =()=>{

}

// game logic

let boxes = document.getElementsByClassName("box");
