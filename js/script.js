function onLoad() {
    let dark_mode_btn = document.querySelector(".dark-mode-button");
    dark_mode_btn.addEventListener("click", () => {
        console.log("toggling");
        dark_mode_btn.classList.toggle('dark');
    }, false);
}

onLoad();