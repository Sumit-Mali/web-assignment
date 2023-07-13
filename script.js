// ***** Mouse Event *****
//  onclick->
function clickevent() {
	alert('Follow us on Instagram, Meta, Whatsapp.');
}

//  onmouseup and onmousedown->
document.getElementById('brand').addEventListener('mousedown', btnpressed);
function btnpressed() {
	document.getElementById('brand').innerHTML =
		"<span style='color:red'>Founders: Sumit, Kartik, Mohit, Sahil</span>";
}

document.getElementById('brand').addEventListener('mouseup', btnup);
function btnup() {
	document.getElementById('brand').innerHTML = 'SKMS Designers';
}

// onmouseover and onmouseout->
document.getElementById('services-item').addEventListener('mouseover', over);
function over() {
	document.getElementById('services-item').style.boxShadow =
		'0 0 5px 2px #000';
}

document.getElementById('services-item').addEventListener('mouseout', out);
function out() {
	document.getElementById('services-item').style.boxShadow = 'none';
}

//  ondblclick->

// ***** Form Events *****
// onfocus->
function highlightInput(elm) {
	elm.style.background = 'lightgreen';
}
// onblur->
// onchange->
// onsubmit->
// onreset->

// onselect->
function myFunction() {
	alert('Text selected');
}

//  ***** JS Validation *****
function validateForm() {
	// Name Validation
	var regName = /\d+$/g;
	var name = document.getElementById('nameInput').value;
	if (name == '' || regName.test(name)) {
		window.alert('Please enter your name properly.');
		name.focus();
		return false;
	}

	// Email Validation
	var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
	var email = document.getElementById('emailInput').value;
	if (email == '' || !regEmail.test(email)) {
		window.alert('Please enter a valid e-mail address.');
		email.focus();
		return false;
	}

	// Phone Validation
	var regPhone = /^\d{10}$/;
	var phone = document.getElementById('phoneInput').value;
	if (phone == '' || !regPhone.test(phone)) {
		window.alert('Please enter valid phone number.');
		phone.focus();
		return false;
	}

	// Message Validation
	var regMessage = /^[A-Z]*$/;
	var message = document.getElementById('messageInput').value;
	if ((message = '' || !regMessage.test(message))) {
		window.alert('Please enter the UPPERCASE letters.');
		phone.focus();
		return false;
	}
}
