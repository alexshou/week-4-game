
    $(document).ready(function() {

    	// 1. assign random number to the random target score between 19-120.
    	var randomGoal = Math.floor(Math.random()*101) + 19;
    	var wins = 0;
    	var loses = 0;
    	// 2. assign random number to the 4 crystal buttons, value between 1 and 12. 
    	var buttonValues = [0, 0, 0, 0];

    	for(var i=0; i < 4; i++ ){
    		var num;
    		num = Math.floor(Math.random()*11) + 1;
    		buttonValues[i] = num;
     		}
    	console.log(randomGoal);
    	console.log(buttonValues);

    	var gameStart = function(){
    		//reset random values
    		randomGoal = Math.floor(Math.random()*101) + 19;
    		for(var i=0; i < 4; i++ ){
    		var num;
    		num = Math.floor(Math.random()*11) + 1;
    		buttonValues[i] = num;
     		}
     		$(".target-score").text(randomGoal);
     		console.log(randomGoal);
    		console.log(buttonValues);

    	}

    	   	//var currentButton = "button-" + (i + 1);
    		//$(".currentButton").attr()

    	// 3. display the target score to html
    	$(".target-score").text(randomGoal);
    	//
    	var totalScore = 0;
    	$(".button-1").on("click",function(){
   			totalScore += buttonValues[0];
   			if(totalScore === randomGoal)
   				{
   					wins += 1;
   					alert("You win!");
   					gameStart();
   					$("#wins").text("wins: " + wins);
   					totalScore = 0;
   				}
   			if(totalScore > randomGoal)
   				{
   					loses += 1;
   					alert("You lose!");
   					gameStart();
   					$("#loses").text("loses: " + loses);
   					totalScore = 0;
   				}
   			$(".total-score").text(totalScore);

    	});

    	$(".button-2").on("click",function(){
   			totalScore += buttonValues[1];
   			if(totalScore === randomGoal)
   				{
   					wins += 1;
   					alert("You win!");
   					gameStart();
   					$("#wins").text("wins: " + wins);
   					totalScore = 0;
   				}
   			if(totalScore > randomGoal)
   				{
   					loses += 1;
   					alert("You lose!");
   					gameStart();
   					$("#loses").text("loses: " + loses);
   					totalScore = 0;
   				}
 			 $(".total-score").text(totalScore);
    	});

    	$(".button-3").on("click",function(){
   			totalScore += buttonValues[2];
   			if(totalScore === randomGoal)
   				{
   					wins += 1;
   					alert("You win!");
   					gameStart();
   					$("#wins").text("wins: " + wins);
   					totalScore = 0;
   				}
   			if(totalScore > randomGoal)
   				{
   					loses += 1;
   					alert("You lose!");
   					gameStart();
   					$("#loses").text("loses: " + loses);
   					totalScore = 0;
   				}
   			$(".total-score").text(totalScore);
    	});

    	$(".button-4").on("click",function(){
   			totalScore += buttonValues[3];
   			if(totalScore === randomGoal)
   				{
   					wins += 1;
   					alert("You win!");
   					gameStart();
   					$("#wins").text("wins: " + wins);
   					totalScore = 0;
   				}
   			if(totalScore > randomGoal)
   				{
   					loses += 1;
   					alert("You lose!");
   					gameStart();
   					$("#loses").text("loses: " + loses);
   					totalScore = 0;
   				}
			$(".total-score").text(totalScore);
    	});
//		 $(".letter-button").on("click", function() {
        
 //         var fridgeMagnet = $("<div>");
 //         fridgeMagnet.addClass("letter fridge-color");
 //         var thisLetter = $(this).attr("data-letter");
  //        fridgeMagnet.text(thisLetter);
  //        $("#display").append(fridgeMagnet);


      });