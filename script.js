let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset")
let newbtn=document.querySelector("#newbtn")
let container = document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")

let trunO=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]


const resetgame=()=>{
   trunO=true;
   enableboxes();
    container.classList.add("hide");
}

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
       
        if(trunO){
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}

 
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
       box.innerText="";
    }
}


 const showwinner=(winner)=>{
    msg.innerText=`The Winner is ${winner}`;
  container.classList.remove("hide");
  disableboxes();
 }

 const checkwinner=()=>{
    for(let pattern of winpatterns ){
   
        let psn1 = boxes[pattern[0]].innerText;
            let psn2 = boxes[pattern[1]].innerText;
                let psn3 = boxes[pattern[2]].innerText;
    

    if(psn1!="" && psn2!="" && psn3!=""){
    if(psn1===psn2 && psn2===psn3){
        
    showwinner(psn1);
    }
    }
    }


let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") isDraw = false;
    });

    if (isDraw) {
        msg.innerText = `It's a Draw!`;
        container.classList.remove("hide");
        disableboxes();
    }

}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
