var swiper = new Swiper(".customer", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: true,
});

// footer date

const date = document.querySelector("#date");

if (date !== null) {
  const getDate = new Date().getFullYear();
  date.textContent = getDate;
}

// fullimage gallery

const fullimage = document.querySelector(".fullimage");
const image = document.querySelector("#image");
const body = document.querySelector("body");
const closeGalleryicon = document.querySelector("#close");

if (fullimage !== null) {
  function getImage(src) {
    fullimage.classList.add("active");
    body.classList.add("active");
    image.src = src;
  }
  function closeGallery() {
    fullimage.classList.remove("active");
    body.classList.remove("active");
  }
}

if (closeGalleryicon !== null) {
  closeGalleryicon.addEventListener("click", closeGallery);
}

// formData
const formEl = document.querySelector(".form");
const formText = document.querySelector(".form-text");

if (formEl !== null) {
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const getFormData = new FormData(formEl);
    console.log(getFormData);
    const getUseName = getFormData.get("name");
    formEl.classList.add("active");
    formText.textContent = `Thank you ${getUseName} for reaching out to us and placing your trust in our services. We appreciate your confidence in us.`;
  });
}

// animation

AOS.init();
