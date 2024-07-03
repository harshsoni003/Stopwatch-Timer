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






const starttimer= ()=>{
    
    interval= setInterval(updatetimer,10);  //10 delay
    startbutton.disabled=true;           //setInterval() 
};

const laptimer= ()=>{
    // clearInterval(interval);  
    addlaplist();
   // resettimerdata();
    startbutton.disabled=false;
};

const pausetimer = ()=>{
  
    clearInterval(interval);     

    startbutton.disabled=false;
};

const resettimer =()=>{
    clearInterval(interval);     
    resettimerdata();
    startbutton.disabled=false;
}
 ;



const updatetimer = ()=>{
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


const displaytimer= ()=>{
    millisecLabel.textContent= padtime(millisec);
    secLabel.textContent= padtime(sec);
    minLabel.textContent= padtime(min);
};

const padtime=(time)=>{
    return time.toString().padStart(2,'0');  // 2 digit start with 0
}


const resettimerdata =()=>{
    min=0;
    sec=0;
    millisec=0;
    displaytimer();
}

const addlaplist =() =>{
    
    const laptime= `${padtime(min)} : ${padtime(sec)}: ${padtime(millisec)}`

    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${laptime}`;
    lapList.appendChild(listItem);
}


startbutton.addEventListener('click', starttimer);
lapbutton.addEventListener('click', laptimer);
pausebutton.addEventListener('click', pausetimer);
resetbutton.addEventListener('click', resettimer);

