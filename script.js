let boxes=document.querySelectorAll(".btn");
let newBtn=document.querySelector(".new-game-btn");
let resetBtn=document.querySelector(".reset-btn");
let msgContainer=document.querySelector(".hide");
let msg=document.querySelector(".msg");

let player0=true;

const mat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player0) {
            box.innerText="O";
            player0=false;
        }
        else{
            box.innerText="X";
            player0=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    });
});

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const reset= ()=>{
    count=0;
    player0=true;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    enablebtn();
    msgContainer.classList.add("hide");
};

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    if(winner!=="X" && winner!=="O"){
        msg.innerText=`The Game is ${winner}`;
    }
    else {
        msg.innerText=`congragulations to the winner ${winner}`;
    }
    msgContainer.classList.remove("hide");
    disablebtn();
}

const checkWinner= ()=>{
    let flag=false;
    for(let it of mat){
        let val1=boxes[it[0]].innerText;
        let val2=boxes[it[1]].innerText;
        let val3=boxes[it[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                flag=true;
            }
        }
    }
    if(count===9 && !flag){
        showWinner("Draw");   
    }
}

resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);