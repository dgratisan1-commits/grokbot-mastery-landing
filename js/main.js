import { siteConfig } from "./config.js";

function applyConfig() {
  const registerLink = document.getElementById("register-link");
  if (registerLink && siteConfig.registrationUrl) {
    registerLink.href = siteConfig.registrationUrl;
  }

  const formatSection = document.getElementById("format");
  if (formatSection && siteConfig.classFormat) {
    const { date, duration, price } = siteConfig.classFormat;
    const placeholders = formatSection.querySelectorAll(".placeholder");
    if (placeholders.length >= 3) {
      placeholders[0].textContent = date;
      placeholders[1].textContent = duration;
      placeholders[2].textContent = price;
    }
  }

  const logoImg = document.querySelector(".brand-logo");
  const wordmark = document.querySelector(".brand .brand-wordmark");
  if (logoImg && siteConfig.logo?.useLogoImage) {
    if (siteConfig.logo.src) {
      logoImg.src = siteConfig.logo.src;
    }
    logoImg.classList.remove("is-hidden");
    if (wordmark) {
      wordmark.classList.add("sr-only");
    }
  }
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initYear();
});
