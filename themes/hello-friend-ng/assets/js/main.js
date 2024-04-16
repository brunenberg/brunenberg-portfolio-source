/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const chosenThemeIsDark = chosenTheme === "dark";

// Apply the initial theme.
document.documentElement.setAttribute("data-theme", chosenThemeIsDark ? "dark" : "light");

// Switch the theme.
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  window.localStorage && window.localStorage.setItem("theme", newTheme);
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
}

