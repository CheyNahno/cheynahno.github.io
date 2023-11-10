function playCraps() {
      /*this is a function to play craps in the game. html for craps, sum of 7 or 11 loses 
      , even or doubles wins, everything else is a push, Cheyenne Pointer Into to programming 10*/
      console.log("playCraps() started");
      // this will write to console log here saying it started
      var die1 = Math.ceil(Math.random() * 6);
      // variable for die one and will tie into the math code and will go by multiple of 6 as there are 6 faces of dice
      console.log("die1 result = " + die1);
      // console log to filter out the output for my log 
      document.getElementById("die1Res").innerHTML = "die1 result = " + die1; 
      // the identifier is die 1 result and should tie into the acutal game page 

      var die2 = Math.ceil(Math.random() * 6);
      // this is the variable for the second dice which also has 6 faces 
      console.log("die2 result = " + die2);
      //to show that we only need results filtered through die 2 
      document.getElementById("die2Res").innerHTML = "die2 result = " + die2; 
       // identifier for dice two on the game.html page 
      var sum = die1 + die2
      //this is the sum of both the dice together 
      console.log("sum result = " + sum);
      // to show the sum result of both dice here 
      document.getElementById("sumRes").innerHTML = "sum result = " + sum; 
      //should be displayed and correspsond with sum result in game.html 

      //check for 7 or 11 meaning loss 
      if (sum == 7 || sum == 11)  { 
        document.getElementById("gameRes").innerHTML = "You lost to the Andaconda!";
        //this is an if statment and how to use it while still corresponding to game.html 
      } //check for doubles and even for the win 
      else if (die1 == die2  && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML =
         "Beat the Andaconda!Please press to play again.";
         //else if statemnt to example and how to correlate it with the previous page 
         //also displays what will show when results are reached 
      } //did not win, did not lose so a push 
      else {
        document.getElementById("gameRes"). innerHTML = 
            "You did not win or lose, but really who wins anyway!";
            //another else example for if we did not win and need to play again. 
      }
      }
