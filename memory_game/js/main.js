var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "dimonds",
	cardImage: "images/queen-of-dimonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "dimonds",
	cardImage: "image/king-of-dimonds.png"
}

];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2)
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match");
		} else {
			console.log("Sorry, try again");
		}
};

var flipCard = function (cardId) {
	cardsInPlay.push (cards[cardId].rank);
	if (cardsInPlay.length === 2){
	}		
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};

flipCard(0);
flipCard(2);