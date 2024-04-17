let boxes = document.querySelectorAll( ".box" );
let resetbtn = document.querySelector( ".resetbtn" );
let newbtn = document.querySelector( ".newbtn" ) ;
let msgcontainer = document.querySelector( ".msg-container" ) ;
let msg = document.querySelector( ".msg" ) ;

let turnO = true;

const winningpattern = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

const resetgame = () =>{
  turnO= true;
  enablebox();
  msgcontainer.classList.add("hide");
}

let count =0;

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO===true){
      box.innerText = "O";
      turnO = false;
      count++;
    }else{
      box.innerText = "X";
      turnO = true;
      count++;
    }
    box.disabled = true;
    checkwinner();
  })
})
const disablebox = ()=>{
  for(let box of boxes){
    box.disabled  = true;
  }
}
const enablebox = ()=>{
  for(let box of boxes){
    box.disabled  = false;
    box.innerText = "";
  }
}
const showwinner =(winner) =>{
  if(count<9){
    msg.innerText = `Congratulation winner is ${winner}`;
  }
  else{
    msg.innerText = `It was a Draw Try again`;
  }
  msgcontainer.classList.remove("hide");
  disablebox();
}
const checkwinner= () =>{
  for(let pattern of winningpattern){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val!=""&& pos2val!="" && pos3val!="") {
          if(pos1val===pos2val && pos2val===pos3val){
            showwinner(pos1val);         
          }
      }
}
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
