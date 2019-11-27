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


function processQuiz()
{
	var score = 0
	
	parent.reportscores(75);
}
