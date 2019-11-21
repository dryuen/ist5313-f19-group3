function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	
	if (question1 == "b") {
		correct++;
	}
	
	if (question2 == "false") {
		correct++;
	}
	
	if (question3 == "a") {
		correct++;
	}
	
	
	
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	
	// you also need to check of correct is greater or equal to some passing scoring
	// if passing, show certificate link (see tutorial)
	
	
	// correct needs to be changed to a score of 0 to 100
	parent.reportScores( correct );
}