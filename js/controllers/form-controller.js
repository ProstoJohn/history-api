function formController() {
	document.title = routes.info.title;
}

function formCheck() {
	var regName = /^[-a-z~!$%^&*_=+}{\'?]+(\.[-a-z~!$%^&*_=+}{\'?]+)?$/i
	var regEmain = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	var age = /^\d{1,3}$/;
	
	var firstName = regName.test(document.getElementById("firstname").value);
	var lastName = regName.test(document.getElementById("lastname").value);
	var email = regEmain.test(document.getElementById("email").value);
	var age = age.test(document.getElementById("age").value);


	if (firstName == false) {
		alert('Неверно ввели имя')
	}
	if (lastName == false) {
		alert('Неверно ввели фамилию')
	}
	if (email == false) {
		alert('Неверно ввели email')
	}
	if (age == false) {
		alert('Неверно ввели возвраст')
	}
	
}
