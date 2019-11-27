function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;
	
	if (question1 == "b") {
		correct++;
	}
	
	if (question2 == "b") {
		correct++;
	}
	
	if (question3 == "a") {
		correct++;
	}
	
	if (question4 == "a") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
}



function processQuiz()
{
	var score = 0
	
	parent.reportscores(75);
}
