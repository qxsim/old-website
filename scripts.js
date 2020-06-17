function showabout() {
	$("#about_container").css("display", "inherit");
	$("#middle").css("display", "none");
	$("#about").css("display", "none");
	$("#work").css("display", "none");
	$("#contact").css("display", "none");
	$("#footer").css("display", "none");
	$("#about_container").addClass("animated slideInLeft");
	setTimeout(function () {
		$("#about_container").removeClass("animated slideInLeft");
	}, 800);
}

function closeabout() {
	var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
	$("#about_container").addClass("animated slideOutLeft");
	$("#middle").css("display", "flex");
	$("#footer").css("display", "inline");

	if (!(width <= 800)) {
		$("#about").css("display", "flex");
		$("#about").addClass("animated fadeIn");
		$("#work").css("display", "flex");
		$("#work").addClass("animated fadeIn");
		$("#contact").css("display", "flex");
		$("#contact").addClass("animated fadeIn");
	}

	setTimeout(function () {
		$("#about_container").removeClass("animated slideOutLeft");
		$("#about_container").css("display", "none");
	}, 800);
}

function showwork() {
	$("#work_container").css("display", "inherit");
	$("#middle").css("display", "none");
	$("#about").css("display", "none");
	$("#work").css("display", "none");
	$("#contact").css("display", "none");
	$("#footer").css("display", "none");
	$("#work_container").addClass("animated slideInRight");
	setTimeout(function () {
		$("#work_container").removeClass("animated slideInRight");
	}, 800);
}

function closework() {
	var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
	$("#work_container").addClass("animated slideOutRight");
	$("#middle").css("display", "flex");
	$("#footer").css("display", "inline");

	if (!(width <= 800)) {
		$("#about").css("display", "flex");
		$("#about").addClass("animated fadeIn");
		$("#work").css("display", "flex");
		$("#work").addClass("animated fadeIn");
		$("#contact").css("display", "flex");
		$("#contact").addClass("animated fadeIn");
	}

	setTimeout(function () {
		$("#work_container").removeClass("animated slideOutRight");
		$("#work_container").css("display", "none");
	}, 800);
}

function showcontact() {
	$("#contact_container").css("display", "inherit");
	$("#middle").css("display", "none");
	$("#about").css("display", "none");
	$("#work").css("display", "none");
	$("#contact").css("display", "none");
	$("#footer").css("display", "none");
	$("#contact_container").addClass("animated slideInUp");
	setTimeout(function () {
		$("#contact_container").removeClass("animated slideInUp");
	}, 800);
}

function closecontact() {
	var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
	$("#contact_container").addClass("animated slideOutDown");
	$("#middle").css("display", "flex");
	$("#footer").css("display", "inline");

	if (!(width <= 800)) {
		$("#about").css("display", "flex");
		$("#about").addClass("animated fadeIn");
		$("#work").css("display", "flex");
		$("#work").addClass("animated fadeIn");
		$("#contact").css("display", "flex");
		$("#contact").addClass("animated fadeIn");
	}

	setTimeout(function () {
		$("#contact_container").removeClass("animated slideOutDown");
		$("#contact_container").css("display", "none");
	}, 800);
}

setTimeout(function () {
	setTimeout(function () {
		$("#about").removeClass("animated fadeIn");
		$("#contact").removeClass("animated fadeIn");
		$("#work").removeClass("animated fadeIn");
	}, 1000);
}, 1500);
