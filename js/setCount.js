var totalNumberRows = 0;
var stitchesPerRow = 0;
var currentRow = 0;
var currentNumStitches = 0; 

function setCount() 
{
	totalNumberRows = document.getElementById("numRows").value; 
	stitchesPerRow = document.getElementById("numStitches").value; 
	if (totalNumberRows == "") {
		totalNumberRows = 0;
		var alertDialog = document.getElementById("alert");
		document.getElementById("notice").value="Please check parameters";
		alertDialog.showModal();
		return false;
	}
	else 
	{
		document.getElementById("maxRows").value = totalNumberRows;
		document.getElementById("maxStitches").value = stitchesPerRow;
	}
}

function resetCounts()
{
	currentRow = 0;
	totalNumberRows = 0;
	currentNumStitches = 0;
	document.getElementById("maxRows").value = currentRow;;
	document.getElementById("maxStitches").value = currentNumStitches;
	document.getElementById("currentRow").value = currentRow;
	document.getElementById("currentNumStitches").value= currentNumStitches;  
}

function incrementRow()
{
	currentRow = currentRow + 1;
	currentNumStitches = Number(currentNumStitches) + Number(stitchesPerRow);
	document.getElementById("currentRow").value = currentRow;  
	document.getElementById("currentNumStitches").value = currentNumStitches;
	if(currentRow >= totalNumberRows)
	{
		currentRow = totalNumberRows;
		var alertDialog = document.getElementById("alert");
		document.getElementById("notice").value="You're done!";
		alertDialog.showModal();
		return;
	}
}

function closeDialog()
{

	var alertDialog = document.getElementById("alert");
	alertDialog.close();
	return;
}


// Event Listener assignment to link functions to user interation
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("submit").addEventListener("click", setCount);
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("resetCounters").addEventListener("click", resetCounts);
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("nextRow").addEventListener("click", incrementRow);
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("okAndClose").addEventListener("click", closeDialog);
});
