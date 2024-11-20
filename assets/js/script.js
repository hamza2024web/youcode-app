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

    const imageFile = fd.get('image');

    const reader = new FileReader();
    reader.onload = function (event) {
        const obj = {
            name: fd.get('name'),
            job: fd.get('job'),
            image: event.target.result, 
        };
        dataArray.push(obj);
        console.log(dataArray);

        const cardList = document.getElementById("card-list");
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-about">
                <img src="${obj.image}" alt="${obj.name}">
                <h3>${obj.name}</h3>
                <p>${obj.job}</p>
            </div>
        `;
        cardList.appendChild(card);

        document.getElementById("form").style.display = "none";

        form.reset();
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please select an image to upload.');
    }
});
