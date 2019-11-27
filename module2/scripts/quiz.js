function processQuiz(){
	
	var answer1 = document.forms.quiz1.value;
	var answer2 = document.forms.quiz1.value;
	var answer3 = document.forms.quiz1.value;
	var answer4 = document.forms.quiz1.value;
	var counter= 0;
	
	if (answer1 == "1") {
		counter=counter+1;
	}
	
	if (answer2 == "1") {
		counter=counter+1;
	}
	
	if (answer3 == "0") {
		counter=counter+1;
	}
	
	if (answer4 == "0") {
		counter=counter+1;
	}
	
	alert("You got " + counter + " questions correct!");
}	
	
	
	
	
	
	// you also need to check of correct is greater or equal to some passing scoring
	// if passing, show certificate link (see tutorial)
	
	
	// correct needs to be changed to a score of 0 to 100
function processQuiz()
{
	var score = 0
	
	parent.reportscores(75);
}