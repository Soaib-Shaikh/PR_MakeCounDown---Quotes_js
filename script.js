const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
      image: "https://t3.ftcdn.net/jpg/01/95/72/18/360_F_195721857_qwm4QSETlBFtCSKWW7kbNt3O5DRgAanr.jpg"
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan",
      image: "https://plus.unsplash.com/premium_photo-1675721719615-457c2f07958a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Success is how high you bounce when you hit bottom.",
      author: "George S. Patton",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1050&q=80"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      image: "https://t4.ftcdn.net/jpg/03/98/29/37/360_F_398293720_XOwzFWNaEG23Nm7ipWeKKWnwB7f5vImI.jpg"
    }
  ];

  let index = 0;

  const quoteText = document.querySelector(".quote-text");
  const quoteAuthor = document.querySelector(".quote-author");
  const quoteImage = document.querySelector(".card-img");

  setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteText.textContent = `“${quotes[index].text}”`;
    quoteAuthor.textContent = `— ${quotes[index].author}`;
    quoteImage.src = quotes[index].image;
  }, 5000); 

