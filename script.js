const emojis = ["🐰", "🐰", "🐱", "🐱", "🐶", "🐶", "🐼", "🐼", "🐻", "🐻", "🐸", "🐸", "🦊", "🦊", "🐹", "🐹"];
let shuffledEmojis = emojis.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("gameBoard");
let selectedCards = [];
let matchedCards = [];

function createBoard() {
    shuffledEmojis.forEach((emoji, index) => {
        let card = document.createElement("div");
        card.classList.add("card", "hidden");
        card.dataset.index = index;
        card.innerHTML = "❓"; 
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    let card = this;
    let index = card.dataset.index;

    if (!selectedCards.includes(card) && selectedCards.length < 2 && !matchedCards.includes(card)) {
        card.innerHTML = shuffledEmojis[index]; 
        card.classList.remove("hidden");
        selectedCards.push(card);
    }

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    let [card1, card2] = selectedCards;
    if (card1.innerHTML === card2.innerHTML) {
        matchedCards.push(card1, card2);
    } else {
        card1.innerHTML = "❓";
        card2.innerHTML = "❓";
        card1.classList.add("hidden");
        card2.classList.add("hidden");
    }
    selectedCards = [];

    if (matchedCards.length === emojis.length) {
        setTimeout(() => alert("🎉 You won! 🎀"), 500);
    }
}

createBoard();
