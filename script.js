// script.js
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");
  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
    if (path === "" && href === "index.html") a.classList.add("active");
  });

  // Optional: simple "copy email" behavior if you add a button later.
})();
