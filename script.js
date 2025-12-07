let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msgCont=document.querySelector(".winner");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn");

let turn0=true;//player1

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){//if there is turn of player 0 set the text as 0
            box.style.color="Red";
            box.innerText="o";
            turn0 = false;
        }else{
            box.style.color="Black";
            box.innerText="x";
            turn0 = true;
        }
       box.disabled="true";
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPattern){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if(pos1val!=""&&pos2val!=""&&pos3val!=""){
                if(pos1val===pos2val&&pos2val===pos3val){
                    showWinner(pos1val);
                }
            }
        };
};

const showWinner =(winner)=>{
    msg.innerText=`Congratulation the winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBox();
};

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
        innerText="";
    }
}

const reset=()=>{
    turn0=true;
    enableBox();
    msgCont.classList.add("hide");
};

resetbtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);