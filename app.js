let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turn0=true;
const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const resetGame=()=>{
   turn0=true;
   enableBoxes();
   msgContainer.classList.add("hide");
}
// add eventListener
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
       checkWinner();
    }
    );
}
);
// Disable boxes function
const disableBoxes= ()=>{
for(let box of boxes){
    box.disabled=true;
    
}
}
// Enable boxes Function
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    }
const showWinner= (pos1val)=>{
    msg.innerText=`congrulations,winner is ${pos1val}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
// Check Winner
const checkWinner= ()=>{
    for(let pattern of winPattern ){
    
           let pos1val= boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText
           
           if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val)
                showWinner(pos1val);
            }
           }
    };
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

