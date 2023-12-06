var timer = 60;
var scoreval = 0;
var rn = 0;
var target = 0;


// for increasing score 
function newScore(){
    scoreval += 10;
    document.querySelector(".score").innerHTML = scoreval;
}

// for new value of hit 
function newHit(){
     target = Math.floor(Math.random()*30);
    document.querySelector(".hit").innerHTML = target;
}

// for making bubbles
function makeBubbles(){
    var bubbles = "";

for (var i = 1 ; i <= 200 ; i++)
{
    rn = Math.floor(Math.random()*30);

    bubbles += `<div class="bg-blue-700 w-14 h-14 rounded-full m-2 text-white flex justify-center items-center font-extrabold text-2xl cursor-pointer hover:bg-blue-400 transition-all duration-150>${rn}</div>`;

}

document.querySelector(".balls").innerHTML = bubbles;
}

// for timer of 60 secs
function runTimer(){
   var t =  setInterval(function(){
        if (timer>0)
        {
        timer--;
        document.querySelector(".timerval").innerHTML = timer;
        }
        else {
            clearInterval(t);
            document.querySelector(".balls").innerHTML = `<div
            class="flex-col justify-center items-center">
            <h1 class="relative bottom-32 font-extrabold font-5xl">Game 
            Over 
            <br>
            Your Score is ${scoreval}🎊</h1>
            <br>
            <button class="text-sm font-bold bg-black border-white p-1 rounded-md flex justify-center items-center text-white" onclick="playAgain()"> Play Again </button>
            </div>`;
        }
    }, 2000);
}

// for playing again
function playAgain(){
    newHit(); 
    timer = 60;
    runTimer();
    makeBubbles();
    
    
    document.querySelector(".score").innerHTML = 0;
        scoreval = 0;
    if(clicked === target){
        newScore();
        newHit();
        makeBubbles();
    } 
    
}

// refresh button
function refresh(){ 
    makeBubbles();
    newHit();
    runTimer();
}

// eventlistener on the bubbles 
    document.querySelector(".balls").addEventListener("click",(delts)=>{
    var clicked = Number(delts.target.innerHTML);
    // alert(`clicked ${clicked}`)
    
    if(clicked === target){
        newScore();
        newHit();
        makeBubbles();
    } 
})




newHit(); 
runTimer();
makeBubbles();


