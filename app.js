const card = document.querySelector(".card");
const btn1 = document.querySelector(".btn1");

// Optional function to flip the card below//

// card.addEventListener("click", () => {
//     card.classList.toggle("flipCard");
// })

btn1.addEventListener("click", () => {
    card.classList.toggle("flipCard");
})