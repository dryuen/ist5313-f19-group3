
// This function shows output text box and fills it with
// the corresponding text.  The variable number represents
// the hotspot number.  
function showText( number )
{
	// show the output box
	document.getElementById( "output-box" ).style.display = "block";
	
	if( number == 1 )
	{
		document.getElementById( "output-text" ).innerHTML = "Minimum coverage that all plans must offer.";
	}
	else if( number == 2 )
	{
		document.getElementById( "output-text" ).innerHTML = "Legislation that requires insurance companies and providers to treat behavioral health coverage the same as medical coverage.";
	}
	else if( number == 3 )
	{
		document.getElementById( "output-text" ).innerHTML = "Difference of cost between the what the insurance pays and the provider's cost for the service.";
	}
	
}

function hideOutput()
{
	document.getElementById( "output-box" ).style.display = "none";
}