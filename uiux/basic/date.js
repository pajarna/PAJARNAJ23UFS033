window.onload = initAll;

function initAll() {
	var now = new Date();
	if(now.toLocalDateString) {
		var date = now.toLocalDateString();
		var time = now.toLocaleTimeString();
		alert("it is:" + time +"on" + date);
		if(document.getElementById) {
			document.getElementById("dateString").innerHTML = "it is:" + time + "on" + date;
		}
		else {
			document.write("it is:" + time + "on" + date);
		}

	}
	else {
		alert("your browser does not give a local-specific date/time");
	}
	
	
	
}
