"use strict";

var start = function () {
	var question = $("#question");
	var answer = $("#answer");

	question.on("click", function () {
		answer.fadeIn(2000, function () {
			question.addClass("coolblue");         
		});
	});	

	answer.on("click", function () {
		answer.fadeOut(1000);
	}); 
};

// Wait till HTML loads 
$(document).ready(start);
