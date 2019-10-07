let cards=["queen","queen","king","king"];
let cardsInPlay=[];
let cardOne=0;
let cardTwo=2;
function checkForMatch(){
	if(cardsInPlay.length===2){
		if(cardsInPlay[0]==cardsInPlay[1]){
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	}
}
function flipCard(cardId){
	console.log("User flipped the "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(cardOne);
flipCard(cardTwo);
