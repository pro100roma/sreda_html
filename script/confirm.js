var stopRestart = false;

function beforeLoad (event) {
	console.log(stopRestart);
	if (stopRestart != true) {
		event.returnValue = $(".exitblock").fadeIn();
	} else {
		event.returnValue = false;
	}
}

window.addEventListener('beforeunload', beforeLoad);
$(document).click(function (e) {
	if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
		$(".exitblock").remove();
	}
});
