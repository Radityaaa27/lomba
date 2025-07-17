document.addEventListener("DOMContentLoaded", function () {
  // Loading Animation
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(function () {
      loader.style.opacity = "0";
      setTimeout(function () {
        loader.style.display = "none";
      }, 500);
    }, 1500);
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Animation for hamburger lines
    const lines = this.querySelectorAll(".line");
    if (this.classList.contains("active")) {
      lines[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      lines.forEach((line) => {
        line.style.transform = "";
        line.style.opacity = "";
      });
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      const lines = hamburger.querySelectorAll(".line");
      lines.forEach((line) => {
        line.style.transform = "";
        line.style.opacity = "";
      });
    });
  });

  // Sticky Navbar on Scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const backToTop = document.querySelector(".back-to-top");

    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      backToTop.classList.add("active");
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      backToTop.classList.remove("active");
    }
  });

  // Typing Animation
  const typed = new Typed(".typing", {
    strings: ["Cerdas", "Kreatif", "Berkarakter"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Counter Animation
  const counters = document.querySelectorAll(".number");
  const speed = 200;

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target;
      }
    });
  }

  // Activate counters when scrolled to
  function checkCounters() {
    const aboutSection = document.querySelector(".about");
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
      animateCounters();
      window.removeEventListener("scroll", checkCounters);
    }
  }

  window.addEventListener("scroll", checkCounters);

  // Facility Slider
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    sliderContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  // Auto slide
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Animate Elements on Scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".card, .about-image, .news-card, .info-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  window.addEventListener("load", function () {
    const elements = document.querySelectorAll(
      ".card, .about-image, .news-card, .info-item"
    );
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    // Trigger animation for elements already in view
    setTimeout(animateOnScroll, 500);
  });

  window.addEventListener("scroll", animateOnScroll);
  // Tambahkan ini di dalam DOMContentLoaded

  // Teacher Card Animation
  const teacherCards = document.querySelectorAll(".teacher-card");

  function animateTeacherCards() {
    teacherCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  // Set initial state for teacher cards
  window.addEventListener("load", function () {
    teacherCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    // Trigger animation for cards already in view
    setTimeout(animateTeacherCards, 500);
  });

  window.addEventListener("scroll", animateTeacherCards);
});
