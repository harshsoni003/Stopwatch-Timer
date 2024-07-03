const minLabel= document.getElementById("min");
const secLabel= document.getElementById("sec");
const millisecLabel= document.getElementById("millisec");


const startbutton=document.getElementById("startBtn");
const lapbutton=document.getElementById("lapBtn");
const pausebutton=document.getElementById("PauseBtn");
const resetbutton=document.getElementById("ResetBtn");

const lapList=document.getElementById("laplist");

let min = 0;
let sec = 0;
let millisec = 0;
let interval;



startbutton.addEventListener('click', starttimer);
lapbutton.addEventListener('click', laptimer);
pausebutton.addEventListener('click', pausetimer);
resetbutton.addEventListener('click', resettimer);




function starttimer (){
    
    interval= setInterval(updatetimer,10);  //10 delay
    startbutton.disabled=true;           //setInterval() 
};

function laptimer (){
    // clearInterval(interval);  
    addlaplist();
   // resettimerdata();
    startbutton.disabled=false;
};

function pausetimer (){
  
    clearInterval(interval);     

    startbutton.disabled=false;
};

function resettimer (){
    clearInterval(interval);     
    resettimerdata();
    startbutton.disabled=false;
}
 ;



function updatetimer (){
     millisec++;
     if(millisec===100){
        millisec=0;
        sec++;

     if(sec===60){
        sec=0;
        min++;


     }
    }

     displaytimer();
};


function displaytimer (){
    millisecLabel.textContent= padtime(millisec);
    secLabel.textContent= padtime(sec);
    minLabel.textContent= padtime(min);
};

function padtime(time){
    return time.toString().padStart(2,'0');  // 2 digit start with 0
}


function resettimerdata(){
    min=0;
    sec=0;
    millisec=0;
    displaytimer();
}

function addlaplist(){
    
    const laptime= `${padtime(min)} : ${padtime(sec)}: ${padtime(millisec)}`

    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${laptime}`;
    lapList.appendChild(listItem);
}

