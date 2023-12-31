const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

const indicatorParents = document.querySelector(".after-controls ul");
let sectionIndex = 0;
document
  .querySelectorAll(".after-controls li")
  .forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
      sectionIndex = ind;
      selected();
    });
  });

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  selected();
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 24 ? sectionIndex + 1 : 0;
  selected();
});

function selected() {
  document
    .querySelector(".after-controls .selected")
    .classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = `translate(` + sectionIndex * -4 + `%)`;
}
