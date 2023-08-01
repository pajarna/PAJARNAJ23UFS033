window.onload = initAll;

function initAll() {
	document.getElementById("findById").onclick = findById;
	
}

function findById() {

var id = document.getElementById("id_value").ariaValueMax;
var e = document.getElementById(id);
if (e != null){
    e.style.backgrountColor = "yellow";
}
else{
    alert("colud not find element by ID:  " +  id);
    
}

}

