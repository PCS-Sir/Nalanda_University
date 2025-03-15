// Mobile navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.getElementById("navLinks");

  // Toggle menu functions
  window.showMenu = function () {
    navLinks.style.right = "0";
  };

  window.hideMenu = function () {
    navLinks.style.right = "-200px";
  };

  // Handle academics link click on mobile
  const isMobile = window.innerWidth <= 700;

  if (isMobile) {
    const academicsLink = document.querySelector(".dropdown > a");

    if (academicsLink) {
      academicsLink.addEventListener("click", function (e) {
        // Navigate to academics.html instead of showing dropdown
        window.location.href = "academics.html";
        e.preventDefault();
      });
    }
  }

  // Handle window resize
  window.addEventListener("resize", function () {
    const isMobileNow = window.innerWidth <= 700;

    if (isMobileNow !== isMobile) {
      // Reload page to apply correct mobile/desktop behavior
      window.location.reload();
    }
  });
});
