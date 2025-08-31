console.log("Welcome");
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#re");
let turn0=true;
let ne=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
const wp=[
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
        console.log("the box was clicked");
        if(turn0){
             box.innerText="X";
             turn0=false;
        }
        else{
            box.innerText="O";
            turn0=true;
        }
       box.disabled=true;
       checkwin();
    });
});
const show=(win)=>{
    msg.innerText=`congratulations ,winner is ${win}`;
    msgContainer.classList.remove("hide");
}
const checkwin=() => {
    for(let patterns of wp)
    {
        let p1=boxes[patterns[0]].innerText;
        let p2=boxes[patterns[1]].innerText;
        let p3=boxes[patterns[2]].innerText;
        if(p1 !="" && p2!="" && p3!=""){
            show(p1);
        }
    }
};