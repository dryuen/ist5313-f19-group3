function check(){
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question4 = document.quiz.question5.value;
	var question4 = document.quiz.question6.value;
	var question4 = document.quiz.question7.value;
	var question4 = document.quiz.question8.value;
	var question4 = document.quiz.question9.value;
	var question4 = document.quiz.question10.value;
	var correct = 0;
	
	if (question1 == "false") {
		correct++;
	}
	
	if (question2 == "b") {
		correct++;
	}
	
	if (question3 == "true") {
		correct++;
	}
	
	if (question4 == "true") {
		correct++;
	}
	
	if (question5 == "true") {
		correct++;
	}
	
	if (question6 == "true") {
		correct++;
	}
	
	if (question7 == "true") {
		correct++;
	}
	
	if (question8 == "true") {
		correct++;
	}
	
	if (question9 == "true") {
		correct++;
	}
	
	if (question10 == "true") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
}