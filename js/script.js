function onLoad() {
    let themeSwitcher = document.querySelector("#theme-switch");
    themeSwitcher.addEventListener("mouseup", themeSwitch, false);
}

function themeSwitch() {
    let currTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    if (currTheme === "light") {
        newTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", newTheme);
}

onLoad();