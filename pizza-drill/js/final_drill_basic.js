// Get the pizza size price and add it to the running Total
// then pass that running total to the next function so 
// the next function will add a particular total to the running total and so on...
//
// Keep doing this until you get all items added to the running total.
//
// Just remember that the syntax will be text1 = text1 + something + "<br>";
// So you take the orginal value and concetenate to something new and end it with
// an HTML line break so our code will write the next thing one line below instead
// of overwriting the previous print out.

function getReceipt() {
	var text1 = "You ordered:";
	var runningTotal = 0; // Monetary value
	var sizeTotal = 0; // Value to be accumulated
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;	
	}
	runningTotal = sizeTotal;	
	getMeat(runningTotal,text1);
};	

function getMeat(runningTotal,text1) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>"
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	text1 = text1+ "$"+meatTotal+".00"+"<br>"; //prints out the price of all meats
	runningTotal = (runningTotal + meatTotal);
	document.getElementById("showText").innerHTML=text1;	
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00"+"";
	getVeggie(runningTotal,text1);
};

function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
			text1 = text1+veggieArray[j].value+"<br>"
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount >= 2) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	text1 = text1+ "$"+veggieTotal+".00"+"<br>";
	runningTotal = (runningTotal + veggieTotal);
	document.getElementById("showText").innerHTML=text1;	
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00"+"";
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByName("Cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
			text1 = text1+cheeseArray[j].value+"<br>"
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	text1 = text1+ "$"+cheeseTotal+".00"+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("showText").innerHTML=text1;	
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00"+"";
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByName("Sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1+sauceArray[j].value+"<br>"			
		}
	}
	text1 = text1+ "$"+sauceTotal+".00"+"<br>";
	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("showText").innerHTML=text1;	
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00"+"";
	getCrust(runningTotal,text1);
};

function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByName("Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			text1 = text1+crustArray[j].value+"<br>"			
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	text1 = text1+ "$"+crustTotal+".00"+"<br>";
	runningTotal = (runningTotal + crustTotal);	
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText").innerHTML=text1;	
	document.getElementById("totalPrice").innerHTML = "$"+runningTotal+".00"+"";
};

// This code clears the form selections to their defaults and then sets the 
// corresponding div's CSS opacity to 0, effectively hiding it from view.

function getclearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};