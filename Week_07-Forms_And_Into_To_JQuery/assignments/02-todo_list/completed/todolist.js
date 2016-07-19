"use strict";
//** main function definition **//
var main = function () {
	$("#task").on("submit", handleForm);
};

var handleForm = function () {
//** implementing .val method to get the value of an inputted form item **//
	var taskVal = $("#task").val();
	var priorityVal = $("#priority").val();
	var duedateVal = $("#duedate").val();


//**
	var 






	return false;
};

//**don't run main function without document's HTML loaded first**//
$(document).ready(main);