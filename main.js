// var $ = window.jQuery;
// var $msg = $('#messages');

const divElement = document.getElementById('messages');
const btnEvt = document.getElementById('btnEvt');

btnEvt.addEventListener('click', getInfoOfUser)

function getInfoOfUser(){
	
}

function giveMeAcoffee(msj) {
	let ValueCoffe = prompt('tell me what coffee you want')
	const dataToday = new Date();
	const dayWeek = dataToday.getDay()

	function ApplyDesc(msj) {
		return true;
	}

	function withoutDesc(msj) {
		return false;
	}

	dayWeek == 7 ? ApplyDesc() : withoutDesc()

	return {
		giveMeAcoffee : ApplyDesc,
		giveMeAcoffee : withoutDesc,
	}
}



