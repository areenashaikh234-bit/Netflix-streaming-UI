

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
