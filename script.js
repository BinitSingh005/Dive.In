// Games data structure (minimal, can be fetched from API/file in real apps)
const games = [
  {
    id: 1,
    name: "Valorant",
    price: 499,
    image: "images/game1.jpg",
    detailsPage: "details/game1.html"
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    price: 2199,
    image: "images/game2.jpg",
    detailsPage: "details/game2.html"
  },
  {
    id: 3,
    name: "Grand Theft Auto VI",
    price: 8199,
    image: "images/game3.jpg",
    detailsPage: "details/game3.html"
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    price: 2999,
    image: "images/game4.jpg",
    detailsPage: "details/game4.html"
  },
  {
    id: 5,
    name: "Hitman world of Assassinations",
    price: 1600,
    image: "images/game5.jpg",
    detailsPage: "details/game5.html"
  },
  {
    id: 6,
    name: "Black Myth : Wukong",
    price: 4599,
    image: "images/game6.jpg",
    detailsPage: "details/game6.html"
  }
  ,
  {
    id: 7,
    name: "Ghost of Tsushima",
    price: 3999,
    image: "images/game7.jpg",
    detailsPage: "details/game7.html"
  } ,
  {
    id: 8,
    name: "The Witcher 3 : Wild Hunt",
    price: 1699,
    image: "images/game8.jpg",
    detailsPage: "details/game8.html"
  } ,
  {
    id: 9,
    name: "UNCHARTED 4: A Thief's End",
    price: 2499,
    image: "images/game9.jpg",
    detailsPage: "details/game9.html"
  },
  {
    id: 10,
    name: "Assassin’s Creed IV Black Flag",
    price: 1999,
    image: "images/game10.jpg",
    detailsPage: "details/game10.html"
  }
  ,
  {
    id: 11,
    name: "Batman  : Arkham Knight",
    price: 1899,
    image: "images/game11.jpg",
    detailsPage: "details/game11.html"
  },
  {
    id: 12,
    name: "The Last Of Us Part 1",
    price: 3999,
    image: "images/game12.jpg",
    detailsPage: "details/game12.html"
  },
  {
    id: 13,
    name: "Marvel's Spider-Man Remastered",
    price: 3999,
    image: "images/game13.jpg",
    detailsPage: "details/game13.html"
  },
  {
    id: 14,
    name: "God Of War",
    price: 3299,
    image: "images/game14.jpg",
    detailsPage: "details/game14.html"
  },
  {
    id: 15,
    name: "Elden Ring",
    price: 3599,
    image: "images/game15.jpg",
    detailsPage: "details/game15.html"
  },
  {
    id: 16,
    name: "Detroit: Become Human",
    price: 1999,
    image: "images/game16.jpg",
    detailsPage: "details/game16.html"
  },
  {
    id: 17,
    name: "Hogwarts Legacy",
    price: 3999,
    image: "images/game17.jpg",
    detailsPage: "details/game17.html"
  },
  {
    id: 18,
    name: "Silent Hill 2",
    price: 2800,
    image: "images/game18.jpg",
    detailsPage: "details/game18.html"
  },
  {
    id: 19,
    name: "Assassin's Creed Syndicate",
    price: 1999,
    image: "images/game19.jpg",
    detailsPage: "details/game19.html"
  },
  {
    id: 20,
    name: "Marvel Rivals",
    price: 499,
    image: "images/game120.jpg",
    detailsPage: "details/game20.html"
  }
];


function addToCart(gameId) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  if (!cart.includes(gameId)) cart.push(gameId);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert("Game added to cart!");
}


document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.details-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const gameId = btn.parentElement.getAttribute('data-id');
      const game = games.find(g => g.id == gameId);
      if (game) window.location.href = game.detailsPage;
    });
  });


  document.querySelectorAll('.cart-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const gameId = Number(btn.parentElement.getAttribute('data-id'));
      addToCart(gameId);
    });
  });
});
