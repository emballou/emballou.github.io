


function onLoad() {
    // theme switcher
    let themeSwitcher = document.querySelector("#theme-switch");
    themeSwitcher.addEventListener("mouseup", themeSwitch, false);

    // on scroll header
    
}

function themeSwitch() {
    let currTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    if (currTheme === "light") {
        newTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", newTheme);
}

function onScrollHeader() {

}

onLoad();