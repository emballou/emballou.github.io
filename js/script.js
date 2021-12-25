


function onLoad() {
    // theme switcher
    let themeSwitcher = document.querySelector("#theme-switch");
    themeSwitcher.addEventListener("mouseup", themeSwitch, false);

    navTimeline();
}

function themeSwitch() {
    let currTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = "light";
    if (currTheme === "light") {
        newTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", newTheme);
}

function navTimeline() {
    let sectionArr = [
        '#header-section', '#about-section', '#now-section',
        '#education-section', '#projects-section', '#skills-section'
    ];

    let lateralArr = [
        '#lateral-header', '#lateral-about', '#lateral-now',
        '#lateral-education', '#lateral-projects', '#lateral-skills'
    ];

    sectionArr.forEach(function(section, index) {
        let offsetStr = '30%';
        if (index === sectionArr.length - 1) {
            offsetStr = 'bottom-in-view';
        }
        $(section).waypoint(function(direction) {
            console.log(lateralArr[index] + ' is triggered');
            if (direction === 'up') {
                $(lateralArr[index - 1]).addClass('active');
                $(lateralArr[index]).removeClass('active');
            } else {
                $(lateralArr[index]).addClass('active');
                for (let i = 0; i < lateralArr.length; i++) {
                    if (index !== i) $(lateralArr[i]).removeClass('active');
                }
            }
        }, {
            offset: offsetStr
        });
    });
}

onLoad();