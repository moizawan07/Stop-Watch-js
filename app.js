var  display = document.getElementById("counter");

var hour = 0;
var minu = 0;
var sec  = 0;

//      Flag variable 

var stopWatch = true;

function start(){
   
    if(stopWatch == true){

        stopWatch = false;

        timercircle();
    }
}

function  timercircle(){

    if(stopWatch == false){

    hour = parseInt(hour);
    minu = parseInt(minu);
    sec = parseInt(sec);

   sec = sec + 1;

     if(sec == 60){
        sec = 0;
        minu = minu +1;
     }

     if(minu == 60){
        minu = 0;
        sec = 0;
        hour = hour + 1
     }

     if(sec < 10){
        sec = '0' + sec
     }

     if(minu < 10){
        minu = '0' + minu
     }

     if(hour < 10){
        hour = '0' + hour
     }

     display.innerHTML = `${hour}:${minu}:${sec}`

     setTimeout("timercircle()",100)

    }
     
}


//    Stop watch function --->


function Stop(){
  
    if(stopWatch == false){

        stopWatch = true;
    }
}


function reset(){

    display.innerHTML = `00:00:00`

stopWatch = true
 hour = 0;
 minu = 0;
 sec  = 0;


}