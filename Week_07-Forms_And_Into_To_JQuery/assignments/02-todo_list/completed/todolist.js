"use strict";
//** main function definition **//
var main = function () {
	$("#task").on("submit", handleForm);
};

var x = main

//**don't run main function without document's HTML loaded first**//
$(document).ready(main);