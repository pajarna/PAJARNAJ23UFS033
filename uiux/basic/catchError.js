window.onload = initAll;

function initAll() {	
	var ans = prompt("Enter a positive number","");

	try {
		if (!ans || isNaN(ans) || ans<0) {
			throw new error("not a valid number");
		}
		var sqrt = math.sqrt(ans);
		var message = "the square root of " + ans + " is " + sqrt;
		alert(message);
		document.write(message) ;
	}
	catch (errMsg){
		alert(errMsg.message);
	}
}