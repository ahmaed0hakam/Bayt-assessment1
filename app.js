document.addEventListener("DOMContentLoaded", function() {
  var showMore = document.querySelector(".show-more");
  var footer = document.querySelector("footer");
  var smallCircleImg = document.querySelector(".small-cyrcle img");
  var hiddenElements = document.querySelectorAll(".hidden");

  showMore.addEventListener("click", function() {
    footer.classList.toggle("expanded");
    smallCircleImg.classList.toggle("rotate");

    hiddenElements.forEach(function(hiddenElement) {
      hiddenElement.classList.toggle("visible");
    });
  });

  var addButton = document.querySelector(".add");
  var secondaryDiv = document.querySelector(".secondary");
  var addImg = document.querySelector(".add img");

  addButton.addEventListener("click", function() {
    secondaryDiv.classList.toggle("primary");

    addImg.classList.toggle("rotate");

    if (addImg.getAttribute("src") === "icons/plus.png") {
      addImg.setAttribute("src", "icons/minus.png");
    } else {
      addImg.setAttribute("src", "icons/plus.png");
    }
  });
});


function showAlert(message) {
  alert(message);
}
