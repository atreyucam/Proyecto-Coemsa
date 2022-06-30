window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

popUpClose.addEventListener("click", () => {
  popUpWindow.classList.remove("pop-up--window");
  popUpWindow.classList.add("delete");
});
