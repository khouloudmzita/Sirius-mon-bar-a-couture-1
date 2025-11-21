// ====== IMAGE SLIDER ======
const slides = document.querySelectorAll("#imageSlider .slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentSlide = 0;
const totalSlides = slides.length;

// Hide all slides except the first
slides.forEach((slide, index) => {
  slide.style.display = index === 0 ? "block" : "none";
});

// Show slide function
function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}

// Next & Prev controls
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

// Auto-play every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);

// ====== REVIEWS SLIDER ======
const reviewSlider = document.getElementById("reviewsSlider");
const reviews = document.querySelectorAll("#reviewsSlider .review");
let currentReview = 0;
const totalReviews = reviews.length;

// Hide all reviews except the first
reviews.forEach((r, i) => (r.style.display = i === 0 ? "block" : "none"));

function showReview(index) {
  reviews.forEach((r) => (r.style.display = "none"));
  reviews[index].style.display = "block";
}

// Auto-play reviews every 6 seconds
setInterval(() => {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
}, 6000);

// ====== HAMBURGER MENU ======
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ====== BOOKING MODAL ======
const openBookingBtn = document.getElementById("openBookingBtn");
const bookingModal = document.getElementById("bookingModal");
const closeBookingBtn = document.getElementById("closeBookingBtn");
const cancelBookingBtn = document.getElementById("cancelBooking");

function openModal() {
  bookingModal.setAttribute("aria-hidden", "false");
  bookingModal.style.display = "flex";
}

function closeModal() {
  bookingModal.setAttribute("aria-hidden", "true");
  bookingModal.style.display = "none";
}

openBookingBtn.addEventListener("click", openModal);
closeBookingBtn.addEventListener("click", closeModal);
canc
