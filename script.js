const sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
const slideNumberElement = document.getElementById("slide-number");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const indicators = document.getElementById("indicators");
const slidesCount = sliderImages.length;

let currentSlide = 2;

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

const paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  const paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
indicators.appendChild(paginationElement);

const paginationCreatedUl = document.getElementById("pagination-ul");
const paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

paginationBullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    currentSlide = +bullet.getAttribute("data-index");
    theChecker();
  });
});

theChecker();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;

  removeAllActives();
  sliderImages[currentSlide - 1].classList.add("active");

  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide === slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActives() {
  sliderImages.forEach((image) => {
    image.classList.remove("active");
  });

  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
