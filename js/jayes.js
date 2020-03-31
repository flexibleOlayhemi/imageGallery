


function storeName(){
	document.getElementById('h').innerHTML = "READY";

	if (typeof(Storage) !== "undefined"){
		localStorage.setItem("name","Olayemi");
	}else{
		alert('Your browser does not support LS');
	}

	document.getElementById('h').innerHTML = localStorage.getItem("name");
}




