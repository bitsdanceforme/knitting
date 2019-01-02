var totalNumberRows = 0;
var currentRow = 0;

function setCount() 
{
	totalNumberRows = document.getElementById("numRows").value; 
	if (totalNumberRows == "") {
		totalNumberRows = 0;
		var alertDialog = document.getElementById("alert");
		document.getElementById("notice").value="Please check parameters";
		alertDialog.showModal();
		return false;
	}
	else 
	{
		document.getElementById("maxRows").value = totalNumberRows;;
	}
}

function resetCounts()
{
	currentRow = 0;
	totalNumberRows = 0;
	document.getElementById("maxRows").value = currentRow;;
	document.getElementById("maxStitches").value = 0;
	document.getElementById("currentRow").value = 0;
}

function incrementRow()
{
	currentRow = currentRow + 1;
	if(currentRow >= totalNumberRows)
	{
		currentRow = totalNumberRows;
		var alertDialog = document.getElementById("alert");
		document.getElementById("notice").value="You're done!";
		alertDialog.showModal();
		return;
	}
	document.getElementById("currentRow").value = currentRow;  
}


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("submit").addEventListener("click", setCount);
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("resetCounters").addEventListener("click", resetCounts);
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("nextRow").addEventListener("click", incrementRow);
});
