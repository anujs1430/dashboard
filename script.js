// <!-- jQuery for slide animation -->
$(document).ready(function () {
  // Toggle slide down/up on dropdown click
  $(".dropdown-toggle").click(function (e) {
    e.preventDefault();
    var $dropdownMenu = $(this).next(".dropdown-menu");

    // Check if the dropdown is already open
    if ($dropdownMenu.is(":visible")) {
      $dropdownMenu.slideUp(); // Slide up to hide
    } else {
      $(".dropdown-menu").slideUp(); // Slide up all dropdowns
      $dropdownMenu.slideDown(); // Slide down the clicked one
    }
  });

  // Close dropdown if clicked outside
  $(document).click(function (e) {
    if (!$(e.target).closest(".nav-item").length) {
      $(".dropdown-menu").slideUp(); // Slide up all dropdowns
    }
  });
});

// ===================================================
// function for shrink menu
// Toggle the shrink effect on the sidebar and content
$(".toggle-btn").click(function () {
  $(".vertical-nav").toggleClass("shrink");
  $(".content").toggleClass("shrink");
  $("main").toggleClass("main-new-with");
});
// ====================================================

//======================================================
// dark mode
// Function to apply the dark theme
function applyDarkTheme() {
  $(".main-first-card").css(
    "background",
    "linear-gradient(109.6deg, rgb(0 0 0) 11.2%, rgb(63, 61, 61) 78.9%)"
  );
  $(".main-first-card").css("color", "white");

  $(".card").css(
    "background",
    "linear-gradient(109.6deg, rgb(0 0 0) 11.2%, rgb(63, 61, 61) 78.9%)"
  );
  $(".card").css("color", "white");
  $(".text-secondary1").css("color", "white");
  $(".days li").css("color", "white");
}

// Function to remove the dark theme
function removeDarkTheme() {
  $(".main-first-card").css("background", "");
  $(".main-first-card").css("color", "");
  $(".card").css("background", "");
  $(".card").css("color", "");
  $(".text-secondary1").css("color", "");
  $(".days li").css("color", "");
}

// Toggle theme and store preference
$("#theme-icon").on("click", function () {
  $(this).toggleClass("bi-moon-fill bi-brightness-high-fill");
  if ($(this).hasClass("bi-brightness-high-fill")) {
    applyDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    removeDarkTheme();
    localStorage.setItem("theme", "light");
  }
});
// ====================================================

// ====================================================
// On page load, apply the stored theme
$(document).ready(function () {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    $("#theme-icon")
      .addClass("bi-brightness-high-fill")
      .removeClass("bi-moon-fill");
    applyDarkTheme();
  } else {
    $("#theme-icon")
      .addClass("bi-moon-fill")
      .removeClass("bi-brightness-high-fill");
    removeDarkTheme();
  }
});
// ===================================================
