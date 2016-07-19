"use strict";

var main = function () {
	$("form#calculator").on("submit", handleForm);
};

/**anonymous function**/
var handleForm = function () {
	var number1Element = $("numberone");
	var number1String = number1Element.val();
	var numberone = parseFloat (number1String);

	var number2Element = $("numbertwo");
	var number2String = number2Element.val();
	var numbertwo = parseFloat (number2String);

	var operationElem = $("#operation");
	var operation = operationElem.val ();

	var answerResult = getResult (numberone, numbertwo, operation);
	var answerElem = $("#result");
	$("#result").val (answerResult);
	
	return false;
};

var getResult = function (numberone,numbertwo,operation) {
	var result;
	if (operation === "plus") {
		result = numberone+number2;
	}
	else if (operation === "minus") {
		result = numberone-number2;
	}
	
	return result;
};

$(document).ready(main);