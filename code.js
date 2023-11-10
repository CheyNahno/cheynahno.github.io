function startFun() {
    //start 
    //cheyenne pointer CSC102 30oct2023
    console.log("startFun() started");
    // for troubleshooting to let us know if linked up 
    document.getElementById("startButton").disabled = true; 
    //to only be able to click it only once than disabled 
    //disables start button and enables stop button
    document.getElementById("stopButton").disabled = false;
    //disables the stop button and enables the start button
    //becomes logical inverses of each others
    document.getElementById("myMarquee").start(); 
    //tells the image to start running the marquee or moving the image right 
}
    //stop function 
function stopFun() {
    //log for debugging 
    console.log("stopFun()started");
    //turn off stop button 
    //click on this once it will show true and then not be able to be used again as it is disabled 
    document.getElementById("stopButton").disabled = true; 
    //disables the start button when the stop button is used
    //turn on start button 
    document.getElementById("startButton").disabled = false;
    //tells the image to stop moving, relating it bck to myMarquee
    document.getElementById("myMarquee").stop(); 
}