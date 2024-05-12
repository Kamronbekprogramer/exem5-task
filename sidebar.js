const users__cards = document.querySelector(".content");
const API_URL = "https://fakestoreapi.com/products";

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function openSubMenu(menuIndex) {
  try {
    const data = await fetchData(API_URL);
    if (menuIndex === 1) {
      const buyBilet = document.querySelector(".buy-bilet");
      const contentText = document.querySelector(".content-text");
      buyBilet.style.display = "block";
      contentText.style.display = "none";
      const productData = data;
      createCard(productData);
    } else if (menuIndex === 2) {
      console.log("ok");
      const buyBilet = document.querySelector(".buy-bilet");
      const contentText = document.querySelector(".content-text");
      buyBilet.style.display = "none";
      contentText.style.display = "block";
      createCard(data);
    }
  } catch (error) {
    console.error("Error handling menu click:", error.message);
  }
}

function createCard(data) {
  const cardContainer = document.querySelector(".content-text");
  const card = document.createElement("div");
  card.classList.add("product-card");
  data.map((item) => console.log(item));
  data.map((item) => {
    card.innerHTML += `
    <div class="cards">
    <img src="${item.image}" alt="Product Image" class="product-image">
    <div class="product-details">
    <h2 class="product-title">id: ${item.id}</h2>
    <h2 class="product-title">${item.title}</h2>
    <p class="product-price">price: ${item.price} $</p>
    <p class="product-description">${item.description}</p>
    <p class="product-category">Category: ${item.category}</p>
    <div class="product-rating">
    <p class="product-rating-text">Rating: ${item.rating.rate} (${item.rating.count} reviews)</p>
    </div>
    </div>
    </div>
    `;
  });

  cardContainer.appendChild(card);
}

fetchData(API_URL).catch((data) => data.json());


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = form.querySelectorAll("input");
  const values = Array.from(inputs).reduce((acc, input) => {
    acc[input.placeholder] = input.value;
    return acc;
  }, {});

  alert(`
            CHIPTA
    Qayerdan: ${values["Qayerdan"]}
    Qayerga: ${values["Qayerga"]}
    Uchish sanasi: ${values["Sanani tanlang"]}
    Yo'lovchilar: ${values["Yo'lovchilar"]}
    Ism familyangiz: ${values["Ism familyangiz"]}
    To'lov turi: ${values["To'lov turi"]}
    Chipta narxi: 156$
  `);

  form.reset();
});
