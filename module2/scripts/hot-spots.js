
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Third Party Admistrator that processes claims due to their expertise in the coverage.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "These providers are licensed doctors that can evaluate and make diagnoses, as well as prescribe and monitor medication.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "A tool in which you can talk to your provider over the phone or through video conferencing.";
	}
	else if( number == 4 )
	{
		document.getElementById( "output-text" ).innerHTML = "Provides equal amounts of mental health benefits as medical and surgical benefits.";
	}
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}