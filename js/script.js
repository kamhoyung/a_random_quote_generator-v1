// FSJS - Random Quote Generator
let myTimer;

/* A function that gets a random RGB value, but between 0 and 99 instead of 255.
This is to ensure readability, as in too light background makes the white text hard to read */
const randomDarkRGBValue = () => Math.floor(Math.random()*100);

// Using the randomDarkRGBValue function to create the rgb color as a string
const randomColor = () => {
	let color = "rgb(";
	color += randomDarkRGBValue() + ",";
	color += randomDarkRGBValue() + ",";
	color += randomDarkRGBValue() + ")";
	return color;
}

// A function named getRandomQuote that returns a random quote objects
const getRandomQuote = i => {
	i = Math.floor(Math.random()*6);
	return quotes[i];
}

// A funtion named printQuote that replaces the exisiting string in the element with the unique identifier called quote-box
const printQuote =()=> {
	const chosenQuote = getRandomQuote();
	text = `
	<p class='tag'> ${chosenQuote.tag} </p>
	<p class='quote'> ${chosenQuote.quote} </p>`;
		/* conditional statement to lower the font size for quotes with a string containing more than 200 characters.
		This is to ensure readability for smaller screen width */
	  	if ( chosenQuote.quote.length > 200){
			text +="<style>.quote {font-size: 1.7rem;line-height: 1.4;}</style>";
		}
	text += `<p class='source'> ${chosenQuote.source}`;
		// conditional statement for showing citation and year, that will be displayed only if the key exists.
	  	if ( "citation" in chosenQuote){
			text += `<span class='citation'> ${chosenQuote.citation} </span>`;
	  	};
	  	if ("year" in chosenQuote) {
	  		text += `<span class='year'> ${chosenQuote.year} </span>`;
	  	};
  text += "</p>";
  document.body.style.background = randomColor();
  document.getElementById('quote-box').innerHTML = text;
	timer();
}

// a function in which calls the printQuote function every 10 seconds and resets the timer
const timer =() => {
	clearInterval(myTimer);
	myTimer = setInterval(printQuote, 10000);
}
timer();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
