document.title = "Multi Personal Portfolio";
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const allLis = document.querySelectorAll("nav ul li");

const root = document.querySelector(":root");
const gcs = getComputedStyle(root);

const sun = document.querySelector(".mode2 .sun");
const moon = document.querySelector(".mode2 .moon");

sun.addEventListener("click", () => {
  moon.classList.remove("selected");
  sun.classList.add("selected");
  changeBack();
});
moon.addEventListener("click", () => {
  sun.classList.remove("selected");
  moon.classList.add("selected");
  changeBack();
});

function changeBack() {
  if (moon.classList.contains("selected")) {
    root.style.setProperty("--background-color", "#15171b");
    root.style.setProperty("--w-color", "#202428");
    root.style.setProperty("--white-black-text", "#fff");
    root.style.setProperty("--mode-back", "#000");
    root.style.setProperty("--mode-color", "#fff");
    root.style.setProperty("--shadow", "rgb(39 40 56 / 64%)");
    root.style.setProperty("--light-dark-gray", "#eeeeee1f");
  } else {
    root.style.setProperty("--background-color", "#f6f6f9");
    root.style.setProperty("--w-color", "#fff");
    root.style.setProperty("--white-black-text", "#000");
    root.style.setProperty("--mode-back", "#fff");
    root.style.setProperty("--mode-color", "#000");
    root.style.setProperty("--shadow", "rgba(132, 139, 200, 0.18)");
    root.style.setProperty("--light-dark-gray", "#0000001f");
  }
}

const myTable = document.querySelector("#my-table");

const orders = [
  {
    productName: "JavaScript Tutorial",
    productNumber: "85743",
    payment: "Due",
    statue: "Pending",
  },
  {
    productName: "CSS Full Course",
    productNumber: "97245",
    payment: "Refunded",
    statue: "Declined",
  },
  {
    productName: "Flex-Box Tutorial",
    productNumber: "36452",
    payment: "Paid",
    statue: "Active",
  },
];

orders.forEach((e) => {
  const tr = document.createElement("tr");
  const trContent = `
  <td>${e.productName}</td>
  <td>${e.productNumber}</td>
  <td>${e.payment}</td>
  <td class="${
    e.statue == "Pending"
      ? "success"
      : e.statue == "Declined"
      ? "danger"
      : "primary"
  }">${e.statue}</td>
  <td><a href="#" class="primary">Details</a></td>`;
  tr.innerHTML = trContent;
  myTable.lastElementChild.append(tr);
});

const mobileMoon = document.querySelector(".mode .moon");
const mobileSun = document.querySelector(".mode .sun");

mobileSun.addEventListener("click", () => {
  mobileMoon.classList.remove("selected");
  mobileSun.classList.add("selected");
  changeBack2();
});
mobileMoon.addEventListener("click", () => {
  mobileSun.classList.remove("selected");
  mobileMoon.classList.add("selected");
  changeBack2();
});

function changeBack2() {
  if (mobileMoon.classList.contains("selected")) {
    root.style.setProperty("--background-color", "#15171b");
    root.style.setProperty("--w-color", "#202428");
    root.style.setProperty("--white-black-text", "#fff");
    root.style.setProperty("--mode-back", "#000");
    root.style.setProperty("--mode-color", "#fff");
    root.style.setProperty("--shadow", "rgb(39 40 56 / 64%)");
    root.style.setProperty("--light-dark-gray", "#eeeeee1f");
  } else {
    root.style.setProperty("--background-color", "#f6f6f9");
    root.style.setProperty("--w-color", "#fff");
    root.style.setProperty("--white-black-text", "#000");
    root.style.setProperty("--mode-back", "#fff");
    root.style.setProperty("--mode-color", "#000");
    root.style.setProperty("--shadow", "rgba(132, 139, 200, 0.18)");
    root.style.setProperty("--light-dark-gray", "#0000001f");
  }
}

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".mobile-header .container")
const close = document.querySelector(".close")

menu.addEventListener("click", () => {
  navbar.style.left = "0"
})

close.addEventListener("click", () => {
  navbar.style.left = "-100%"
})
