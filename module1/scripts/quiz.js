function processQuiz(){
	
	var answer1 = document.forms.quiz1.question1.value;
	var answer2 = document.forms.quiz1.question2.value;
	var answer3 = document.forms.quiz1.question3.value;
	var answer4 = document.forms.quiz1.question4.value;
	var counter= 0;
	
	if (answer1 == 1) {
		counter=counter+1;
	}
	
	if (answer2 == 1) {
		counter=counter+1;
	}
	
	if (answer3 == 0) {
		counter=counter+1;
	}
	
	if (answer4 == 0) {
		counter=counter+1;
	}
	
	if( counter >= 3 )
		alert("You got " + counter + " questions correct! You passed.");
	else
		alert("You got " + counter + " questions correct! You failed.");

	
	parent.reportScores(counter * 25);
}
