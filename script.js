var lightTheme;

if (typeof localStorage.lightTheme !== "undefined") {
  lightTheme = JSON.parse(localStorage.lightTheme);
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  lightTheme = true
} else {
  lightTheme = false
}

function displayTheme() {
  if (lightTheme) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function changeTheme() {
  lightTheme = !lightTheme;
  localStorage.lightTheme = lightTheme;
  displayTheme();
}

document.getElementById("moon").addEventListener("click", changeTheme);

displayTheme();