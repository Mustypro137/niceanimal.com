const menuReptiles = [
  {
    title: "chameleon",
    category: "reptiles",
    img: "./img/chameleon.jpg",
  },
  {
    title: "crocodile",
    category: "reptiles",
    img: "./img/crocodile.jpg",
  },
];

const menuAmphibians = [
  {
    title: "blue frog",
    category: "amphibians",
    img: "./img/blue-frog.jpg",
  },
];

const menuFishes = [
  {
    title: "crocodile",
    category: "fishes",
    img: "./img/shark.jpg",
  },
];

const menuBirds = [
  {
    title: "cardinal",
    category: "birds",
    img: "./img/cardinal.jpg",
  },
  {
    title: "crow",
    category: "birds",
    img: "./img/crow.jpg",
  },
];

const menuInsects = [
  {
    title: "butterfly",
    category: "insect",
    img: "./img/butterfly.jpg",
  },
  {
    title: "beetle",
    category: "insects",
    img: "./img/beetle.jpg",
  },
  {
    title: "ants",
    category: "insects",
    img: "./img/ants.jpg",
  },
];

const menuMammals = [
  {
    title: "tiger",
    category: "mammals",
    img: "./img/tiger.jpg",
  },
  {
    title: "bear",
    category: "mammals",
    img: "./img/bear.jpg",
  },
  {
    title: "cat",
    category: "mammals",
    img: "./img/cat.jpg",
  },
  {
    title: "cow",
    category: "mammals",
    img: "./img/cow.jpg",
  },
  {
    title: "fox",
    category: "mammals",
    img: "./img/fox.jpg",
  },
];

const menu = [
  menuFishes,
  menuBirds,
  menuInsects,
  menuReptiles,
  menuAmphibians,
  menuMammals,
];
const buttons = document.querySelectorAll(".btn");
const allMenu = menu.flatMap((item) => item);
const containerMenu = document.querySelector(".container-card");

document.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(allMenu);
  displayMenuButton(buttons);
});

let displayMenuItem = function (menu) {
  let menuItem = menu.map((item) => {
    return `
    <div class="card ${item.category}">
    <div class="container-img">
    <img src=${item.img} class="center" />
    </div>
    <div class="text-group">
    <div class="card-text">${item.category} - ${item.title}</div>
    </div>
    </div>
    `;
  });
  menuItem = menuItem.join("");
  containerMenu.innerHTML = menuItem;
};

const displayMenuButton = function (menuButton) {
  menuButton.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const filter = e.target.dataset.filter;
      console.log(filter);

      const filterCatogry = allMenu.filter((menuItem) => {
        if (menuItem.category === filter) {
          return menuItem;
        }
      });

      if (filter === "all") {
        displayMenuItem(allMenu);
      } else {
        displayMenuItem(filterCatogry);
      }
    });
  });
};
