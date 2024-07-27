let gamebtn=document.querySelectorAll(".game");
let winnerText=document.querySelector(".winner-text");
let newbtn=document.querySelector(".new-btn");
let userpoint=document.querySelector(".score");
let computerpoint=document.querySelector(".score2");
let yourchoice=document.querySelector(".yourchoice");
let computerchoice=document.querySelector(".compchoice");
let winnerchoice=document.querySelector(".winnerchoice");
let drawh1=document.querySelector(".drawh1");
let userScore=0;
let CompScore=0;

const randomChoice=()=>{
        const GameChoice=["rock","paper","scissor"];

        let randomidx=Math.floor(Math.random() * 3);
        return GameChoice[randomidx];
}
let winnertext2=document.querySelector(".winner-text-2");
let gameDraw=()=>{
    setTimeout(()=>{
        drawh1.innerText="Game is draw";
        winnertext2.classList.add("hide");
        drawh1.classList.remove("hide");
    },100)

    drawh1.style.backgroundColor=" rgb(14, 53, 68)";
    
}

const ShowWinner=(userwin,userChoice,CompChoice)=>{
    if(userwin){
        userScore++;
        userpoint.innerText=`${userScore}`;
        setTimeout(()=>{
            yourchoice.innerText=`${userChoice}`;
            computerchoice.innerText=`${CompChoice}`;
            winnerchoice.innerText=`${userChoice}`;
            winnertext2.classList.remove("hide");
            drawh1.classList.add("hide");
        },100)
        winnertext2.classList.add("bgyou");
        winnertext2.classList.remove("bgcomp");

        
    }
    else{
        CompScore++;
        computerpoint.innerText=`${CompScore}`;
        setTimeout(()=>{
            yourchoice.innerText=`${userChoice}`;
            computerchoice.innerText=`${CompChoice}`;
            winnerchoice.innerText=`${CompChoice}`;
            winnertext2.classList.remove("hide");
            drawh1.classList.add("hide");
        },100)
        
        winnertext2.classList.add("bgcomp");
        winnertext2.classList.remove("bgyou");
    }
}
let PlayGame=(userChoice)=>{
    let CompChoice=randomChoice();
    console.log("computer choice ",CompChoice);

    let userwin=true;
    if(userChoice===CompChoice){
        gameDraw();
    }
    else{
        if(userChoice==="rock"){
            //scissor paper
            userwin=CompChoice==="paper"?false:true;
            ShowWinner(userwin,userChoice,CompChoice);
        }
        else if(userChoice==="scissor"){
            //rock paper
            userwin=CompChoice==="rock"?false:true;
            ShowWinner(userwin,userChoice,CompChoice);
        }
        else{
            //rock scissor
            userwin=CompChoice==="scissor"?false:true;
            ShowWinner(userwin,userChoice,CompChoice);
        }
    }
    
}

gamebtn.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("your choice ",userChoice);
        PlayGame(userChoice);  
    })
})

newbtn.addEventListener("click",()=>{
    userScore=0;
    CompScore=0;
    userpoint.innerText=`${userScore}`;
    computerpoint.innerText=`${CompScore}`;
    winnerText.style.backgroundColor="rgb(25, 25, 94)"
    winnertext2.classList.add("hide");
    drawh1.classList.remove("hide");
    drawh1.innerText="Play Game....";

})

