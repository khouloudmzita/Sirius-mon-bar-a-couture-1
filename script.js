script.js
/* --------------------------
   Basic interactive behavior
   -------------------------- */

/* Mobile menu toggle (simple) */
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.main-nav');
hamburger && hamburger.addEventListener('click', () => {
  if(nav.style.display === 'flex'){ nav.style.display = ''; }
  else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap = '14px'; nav.style.alignItems = 'flex-start'; }
});

/* --------------------------
   Image slider (infinite loop)
   -------------------------- */
const slider = document.getElementById('imageSlider');
const slides = slider ? Array.from(slider.children) : [];
let current = 0;
let slideCount = slides.length || 1;
let slideWidth = slider ? slider.getBoundingClientRect().width : 0;
let autoSlideTimer = null;

function goTo(index) {
  current = (index + slideCount) % slideCount;
  slider.style.transform = `translateX(-${current * 100}%)`;
}

/* next / prev buttons */
document.getElementById('nextBtn').addEventListener('click', () => { resetAutoSlide(); goTo(current + 1); });
document.getElementById('prevBtn').addEventListener('click', () => { resetAutoSlide(); goTo(current - 1); });

/* auto slide */
function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = setInterval(() => { goTo(current + 1); }, 4200);
}
function stopAutoSlide(){ if(autoSlideTimer) clearInterval(autoSlideTimer); }
function resetAutoSlide(){ stopAutoSlide(); startAutoSlide(); }

startAutoSlide();

/* pause on hover */
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

/* adjust on resize */
window.addEventListener('resize', () => {
  slideWidth = slider.getBoundingClientRect().width;
  goTo(current);
});

/* --------------------------
   Reviews auto-scroll (vertical carousel)
   -------------------------- */
const reviewsSlider = document.getElementById('reviewsSlider');
const reviewCount = reviewsSlider ? reviewsSlider.children.length : 0;
let reviewIndex = 0;

function nextReview(){
  if(!reviewsSlider) return;
  reviewIndex = (reviewIndex + 1) % reviewCount;
  const offset = reviewIndex * (reviewsSlider.children[0].getBoundingClientRect().height + 12);
  reviewsSlider.style.transform = `translateY(-${offset}px)`;
}
let reviewsTimer = setInterval(nextReview, 5200);

/* Pause reviews on hover */
reviewsSlider && reviewsSlider.addEventListener('mouseenter', () => clearInterval(reviewsTimer));
reviewsSlider && reviewsSlider.addEventListener('mouseleave', () => reviewsTimer = setInterval(nextReview, 5200));

/* --------------------------
   Booking modal
   -------------------------- */
const bookingModal = document.getElementById('bookingModal');
const openBookingBtn = document.getElementById('openBookingBtn');
const closeBookingBtn = document.getElementById('closeBookingBtn');
const cancelBookingBtn = document.getElementById('cancelBooking');

function openBooking(){ bookingModal.setAttribute('aria-hidden','false'); }
function closeBooking(){ bookingModal.setAttribute('aria-hidden','true'); }

openBookingBtn && openBookingBtn.addEventListener('click', openBooking);
closeBookingBtn && closeBookingBtn.addEventListener('click', closeBooking);
cancelBookingBtn && cancelBookingBtn.addEventListener('click', closeBooking);

/* close modal on outside click */
bookingModal && bookingModal.addEventListener('click', (e) => {
  if(e.target === bookingModal) closeBooking();
});

/* Booking form submit (placeholder) */
const bookingForm = document.getElementById('bookingForm');
bookingForm && bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Replace with real form handling (AJAX or integration with email service)
  alert('Merci ! votre demande a été envoyée. Nous vous recontacterons rapidement.');
  bookingForm.reset();
  closeBooking();
});

/* Accessibility: Allow ESC to close modal */
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeBooking(); });

/* --------------------------
   Lightweight performance tips
   -------------------------- */
/* If you plan to upload your images to /public, update the image URLs in HTML to relative paths
   e.g. /images/gallery1.jpg to avoid hotlinking issues and improve loading speed. */
