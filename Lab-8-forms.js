/* LAB 8 - SHIPPING FORM */


window.onload = function() {
	var formHandle = document.forms.form_ship;
	formHandle.onsubmit = processForm;

	function processForm(){

var thankYou = document.getElementById('thanks_msg');
// thankYou.style.display = "inline";


var nameValue = formHandle.f_Name;
var customerId = formHandle.f_Id;
var postalCode = formHandle.f_pc;



if (nameValue.value === "" || nameValue.value === null){
	nameValue.style.background = "red";
	nameValue.focus();
	return false;
}

if (customerId.value === "" || customerId.value === null){
	customerId.style.background = "red";
	customerId.focus();
	return false;
} else {
	var idRx = /^\d{6}$/;
	if (idRx.test(customerId.value)=== false){
		customerId.style.background = "red";
		customerId.focus();
		return false;
	}
}


if (postalCode.value === "" || postalCode.value === null){
	postalCode.style.background = "red";
	postalCode.focus();
	return false;
} else {
	var pcRx = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;
 if (pcRx.test(postalCode.value)=== false){
	 postalCode.style.background = "red";
 	postalCode.focus();
 	return false;
 }
}


formHandle.style.display = "none";

thankYou.innerHTML = " 'Thank you " + nameValue.value +" (Customer # " + customerId.value +" ) for your purchase. Your package will be sent to " +
postalCode.value +".' '"

thankYou.style.display = "inline";

return false;
}












//Order Shipping object
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};


}
