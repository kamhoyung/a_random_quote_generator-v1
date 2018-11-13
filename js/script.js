// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
	{
		quote: "Work Harder.",
		source: "Casey Neistat",
		year: "2015",
		citation: "Youtube"
	},
	{
		quote: "...be a tourist in other perspectives.",
		source: "Questlove",
		year: "2018",
		citation: "Creative Quest"
	},
	{
		quote: "You can't become a good designer by staying at home and look at a book. You’ve got to be out. Talk to other people, and travel because there’s nothing better than realizing that 200km from your door, things are different.",
		source: "Erik Spiekerman",
		year: "2010",
		citation: "Interview with gestalten.tv"
	},
	{
		quote: "Complaining is silly. Either act or forget.",
		source: "Stefan Sagmeister",
	},
	{
		quote: "Even if your ambitions are huge, start slow, start small, build gradually, build smart.",
		source: "Gary Vaynerchuck",
	}
]
var text = "";

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(i) {
	var i = Math.floor(Math.random()*5);
	//console.log(i+1);
	return quotes[i];
}


// Create the printQuote funtion and name it printQuote

function printQuote() {
	var gettingTheQuote = getRandomQuote();
	text = "<p class='quote'>" + gettingTheQuote.quote + "</p>";
	text += "<p class='source'>" + gettingTheQuote.source + "</p>";
	/*citation and year should only be displayed if theres a match key: value
  	text += "<span class='citation'>" getRandomQuote().citation + "</span>";
  	text += "<span class='year'>" getRandomQuote().year "</span></p>";
  	*/
  	document.getElementById('quote-box').innerHTML = text;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);