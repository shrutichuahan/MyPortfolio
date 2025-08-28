// -------------------
// Navbar Hamburger Toggle
// -------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// -------------------
// Smooth Scrolling
// -------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    // Close menu on mobile after click
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// -------------------
// Skill Bar Animation
// -------------------
const skillSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-fill");

function showSkills() {
  skillBars.forEach(bar => {
    const value = bar.getAttribute("data-skill");
    bar.style.width = value;
  });
}

window.addEventListener("scroll", () => {
  if (!skillSection) return;
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    showSkills();
  }
});

// -------------------
// Profile Image Upload Preview
// -------------------
const uploadBtn = document.querySelector(".upload-btn");
const profileImg = document.querySelector(".hero-photo img");

if (uploadBtn && profileImg) {
  uploadBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        profileImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    };

    input.click();
  });
}
