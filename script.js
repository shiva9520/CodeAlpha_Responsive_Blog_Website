let search = document.getElementById("search-icon");
let box = document.getElementsByTagName("form")[0];

search.addEventListener("click", () => {
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
});

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let menuList = document.getElementById("menu-list");
menu.addEventListener("click", () => {
  if (menu.style.display !== "none") {
    menu.style.display = "none";
    menuList.style.display = "block";
    close.style.display = "inline-block";
  } else {
    menu.style.display = "inline-block";
    menuList.style.display = "none";
    close.style.display = "none";
  }
});

close.addEventListener("click", () => {
  menu.style.display = "inline-block";
  menuList.style.display = "none";
  close.style.display = "none";
});
