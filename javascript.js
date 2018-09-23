// set the boolean variable true or false
var playing = false;

var score; //set the variable for the score
//if we click on the start/reset

var action;// is used for the function startCountdown

var timeremaining;

var correctAnswer;

document.getElementById("startreset").onclick=function(){
    //if we are playing
    if(playing == true){
        
        location.reload();//reload the page
        
    }else{ //if we are playing
        //set score to 0
        
        playing = true; // if play again (true) -> go to location.reload -> reload the page -> is changing the game mode to playing
        
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        //show count box
        
        //document.getElementById("timeremaining").style.display="block";
        show("timeremaining");
        
        timeremaining=60;
        
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        
		//hide the game over box
		hide("gameOver");
		
        //change button to reset
        
        document.getElementById("startreset").innerHTML="Reset Game!";
        
        //start countdown
        startCountdown();
        
        //GENERATE a new question and multiple answers Q&A
        
        generateQA();
           
        }
        
    }

//Clicking on an answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}
// THE SECTION FUNCTIONS

//START COUNTER
   function startCountdown(){
       
       action = setInterval(function(){
           
		   	timeremaining-=1;  
           
       		document.getElementById("timeremainingvalue").innerHTML = timeremaining; 
           //game over
           if(timeremaining == 0){ 
               /*this is a called function to stop the countdown calling the variable action (which has been set above) via this function */ 
              stopCountdown(); 
              show("gameOver");
               
               
              // document.getElementById("gameOver").style.display="block";
               document.getElementById("gameOver").innerHTML=
                   "<p>GAME OVER!</p><p>YOUR SCORE IS: " + score + "!</p>";
               
               //document.getElementById("timeremaining").style.display="none";
               
               hide("timeremaining");
               hide("correct");
               hide("wrong");
               playing=false;
			   document.getElementById("startreset").innerHTML="Start Game!"
           }
       },1000);}
       
       // the function stop countdown to stop the timer 
       
       //STOP THE COUNTER
       function stopCountdown(){
           clearInterval(action); 
       }
       
       // HIDE ELEMENTS
       function hide(Id){
           document.getElementById(Id).style.display="none";
       }
       
       // SHOW ELEMENTS
       function show(Id){
           document.getElementById(Id).style.display="block";
       }
       
       //function generate Q&A
       
    function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

  
    
        
                //reduce the time by 1 sec in loops
                    //timeleft?
                        //yes->continue
                        //no ->gameover
                
                //generate new Q&A



// if we click on answer box
    // if we playing
        //correct?
            //yes
                //increase score
                //show correct box 1 sec
                // generate new Q&A
            //no
                // show try again box for 1 sec