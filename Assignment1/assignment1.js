/* 
Author: Christopher Haddox
Date: 10/5/2020
Description: Assignment 1 for CPI 310
*/

function ToggleString(message){
	let str=""
	for (let i = 0; i < message.length; i++) {
		if(message.charAt(i).toUpperCase() == message.charAt(i)){
			str += message.charAt(i).toLowerCase();
		}else if(message.charAt(i).toLowerCase() == message.charAt(i)){
			str += message.charAt(i).toUpperCase();
		}
	}
	return str;
}

function FibonacciMaker(number){
	let first=0;
	let second=1;
	let interim;
	var temp = [];
	if(number == 0){
		return temp;
	}else if(number == 1){
		temp.push(0);
		return temp;
	}else if(number == 2){
		temp.push(0);
		temp.push(1);
		return temp;
	}
	temp.push(0);
	temp.push(1);
	for(let i=1; i<=number; i++){
		interim = first+second;
		temp.push(interim);
		first=second;
		second=interim;
	}
	return temp;
}

function Make2D(width, height){
	var arr = new Array(height);
	for (var i = 0; i < height; i++) { 
    	arr[i] = new Array(width); 
	}
	return arr;
}

function Fill2D(arr, value){
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			arr[i][j] = value;
		}
	}
	return arr;
}

function Init2D(width, height, value){
	var arr = Make2D(width, height);
	arr = Fill2D(arr, value);
	return arr;
}

function IntRandRange(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Rand2D(width, height, min, max){
	var arr = Make2D(width, height);
	var value = IntRandRange(min, max);
	arr = Fill2D(arr, value);
	return arr;
}

module.exports = {ToggleString, FibonacciMaker, Make2D, Fill2D, Rand2D, IntRandRange, Init2D};