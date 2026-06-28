

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", () => {

        const answer = accordion.nextElementSibling;

        if(answer.style.display === "block"){

            answer.style.display = "none";

        }

        else{

            answer.style.display = "block";

        }

    });

});



window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "#000";

        nav.style.transition = "0.4s";

    }

    else{

        nav.style.background = "transparent";

    }

});
const movies = [
  {
    title: "Stranger Things",
    rating: "⭐ 8.7",
    genre: "Sci-Fi",
    description: "A group of kids uncover supernatural mysteries in their town."
  },
  {
    title: "Wednesday",
    rating: "⭐ 8.1",
    genre: "Mystery",
    description: "Wednesday Addams investigates a supernatural mystery."
  },
  {
    title: "Money Heist",
    rating: "⭐ 8.2",
    genre: "Crime",
    description: "A criminal mastermind leads the biggest heist in history."
  },
  {
    title: "Squid Game",
    rating: "⭐ 8.0",
    genre: "Thriller",
    description: "Contestants risk their lives in deadly childhood games."
  },
  {
    title: "The Witcher",
    rating: "⭐ 8.0",
    genre: "Fantasy",
    description: "Geralt of Rivia hunts monsters while protecting destiny."
  },
  {
    title: "Extraction",
    rating: "⭐ 6.8",
    genre: "Action",
    description: "A fearless mercenary undertakes a dangerous rescue mission."
  }
];

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("movieModal");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    document.getElementById("modalTitle").innerText = movies[index].title;
    document.getElementById("modalRating").innerText = movies[index].innerText = movies[index].rating;
    document.getElementById("modalGenre").innerText = movies[index].genre;
    document.getElementById("modalDescription").innerText = movies[index].description;

    modal.style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
