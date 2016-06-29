"use strict";

function main () {

	debugger;
	
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var box4 = document.getElementById("box4"); 

	box1.addEventListener("click", clickedbox1);
	box2.addEventListener("click", clickedbox2);
	box3.addEventListener("click", clickedbox3);
	box4.addEventListener("click", clickedbox4);

	}

	function clickedbox1 () {
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
	var box4=document.getElementById("box4");

	box1.style.transform = "rotate(90deg)";
	box2.style.transform = "rotate(180deg)";
	box3.style.transform = "rotate(270deg)";
	box4.style.transform = "rotate(360deg)";	
	}

	function clickedbox2 () {
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
	var box4=document.getElementById("box4");

	box1.style.transform = "rotate(90deg)";
	box2.style.transform = "rotate(180deg)";
	box3.style.transform = "rotate(270deg)";
	box4.style.transform = "rotate(360deg)";
	}

function clickedbox3 () {
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
	var box4=document.getElementById("box4");

	box1.style.transform = "rotate(90deg)";
	box2.style.transform = "rotate(180deg)";
	box3.style.transform = "rotate(270deg)";
	box4.style.transform = "rotate(360deg)";
	}

	function clickedbox4 () {
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
	var box3=document.getElementById("box3");
	var box4=document.getElementById("box4");

	box1.style.transform = "rotate(90deg)";
	box2.style.transform = "rotate(180deg)";
	box3.style.transform = "rotate(270deg)";
	box4.style.transform = "rotate(360deg)";
	}

	window.addEventListener("load", main);