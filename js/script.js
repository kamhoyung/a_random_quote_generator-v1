// FSJS - Random Quote Generator

/* A function that gets a random RGB value, but between 0 and 99 instead of 255.
This is to ensure readability, as in too light background makes the white text hard to read */
function randomDarkRGBValue(){
	return Math.floor(Math.random()*100);
}

// Using the randomDarkRGBValue function to create the rgb color as a string
function randomColor(){
	var color = "rgb(";
	color += randomDarkRGBValue() + ",";
	color += randomDarkRGBValue() + ",";
	color += randomDarkRGBValue() + ")";
	return color;
}

// A function named getRandomQuote that returns a random quote objects
function getRandomQuote(i) {
	var i = Math.floor(Math.random()*6);
	//console.log(i+1);
	return quotes[i];
}

// A funtion named printQuote that replaces the exisiting string in the element with the unique identifier called quote-box

function printQuote() {
	var chosenQuote = getRandomQuote();
	text = "<p class='tag'>" + chosenQuote.tag + "</p>";
	text += "<p class='quote'>" + chosenQuote.quote + "</p>";
	text += "<p class='source'>" + chosenQuote.source;
		// conditional statement for showing citation and year, that will be displayed only if the key exists.
	  	if ( "citation" in chosenQuote){
			text += "<span class='citation'>" + chosenQuote.citation + "</span>";
	  	};
	  	if ("year" in chosenQuote) {
	  		text += "<span class='year'>" + chosenQuote.year + "</span>";
	  	};
  	text += "</p>";
  	document.body.style.background = randomColor();
  	document.getElementById('quote-box').innerHTML = text;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);