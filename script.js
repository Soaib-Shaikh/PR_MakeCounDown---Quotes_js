const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

let index = 0;
let countdown = 5;

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const timer = document.getElementById("countdown");

quoteText.textContent = `“${quotes[index].text}”`;
quoteAuthor.textContent = `— ${quotes[index].author}`;
timer.textContent = countdown;


setInterval(() => {
  countdown--;
  timer.textContent = countdown;

  if (countdown === 0) {
    index = (index + 1) % quotes.length;
    quoteText.textContent = `“${quotes[index].text}”`;
    quoteAuthor.textContent = `— ${quotes[index].author}`;
    countdown = 5; 
  }
}, 1000);
