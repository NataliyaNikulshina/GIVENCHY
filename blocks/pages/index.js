const menuButton = document.querySelector(".header__button");
const closeButton = document.querySelector(".popup__button-close");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
    popup.classList.add("popup_opened");
  });

closeButton.addEventListener("click", () => {
    popup.classList.remove("popup_opened");
  });

