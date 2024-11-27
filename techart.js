// Fungsi untuk menampilkan dan menyembunyikan menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Fungsi untuk menampilkan tombol scroll to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Menampilkan atau menyembunyikan tombol scroll to top saat menggulir
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Fungsi untuk menggulir ke atas
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
