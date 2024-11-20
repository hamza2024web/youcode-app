window.onload = function () {
    document.getElementById("form").style.display = "none";
};

function asd(a) {
    if (a === 1) {
        document.getElementById("form").style.display = "flex";
    } else {
        document.getElementById("form").style.display = "none";
    }
}

const form = document.querySelector('#form');
const dataArray = []; 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);

    
    const obj = Object.fromEntries(fd.entries());
    dataArray.push(obj); 

    console.log(dataArray); 

    // Optional: Add a card for the new person
    const cardList = document.getElementById("card-list");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="card-about">
                <img src="images/${obj.image}" alt="Founder 1">
                <h3>${obj.name}</h3>
                <p>${obj.job}</p>
            </div>
    `;
    cardList.appendChild(card);

    // Hide form after submission
    document.getElementById("form").style.display = "none";

    // Clear form inputs
    form.reset();
});
