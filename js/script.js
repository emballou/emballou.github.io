


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

            // if scrolling up, current index is inactive, next index (index - 1) is active
            let directionBool = direction === 'up';
            // create new active, remove inactive
            window.requestAnimationFrame(function() {
                playGrow(lateralArr[index], sectionArr[index], !directionBool);
            });
            
            // remove old active, add inactive
            window.requestAnimationFrame(function() {
                playGrow(lateralArr[index - 1], sectionArr[index - 1], directionBool);
            });

        }, {
            offset: offsetStr
        });
    });
}

function playGrow(e, s, isActive) {
    if (e === undefined) return;
    if (isActive && $(e).hasClass("active")) return;
    if (!isActive && $(e).hasClass("inactive")) return;

    // edit the timeline
    $(e).removeClass("active");
    $(e).removeClass("inactive");
    if (isActive) {
        $(e).addClass("active");
    } else {
        $(e).addClass("inactive");
    }
    console.log(e + " : " + $(e).attr("class").split(/\s+/));

    // edit the div.page
    $(s).removeClass("page-highlight-on");
    $(s).removeClass("page-highlight-off");
    if (isActive) {
        $(s).addClass("page-highlight-on");
    } else {
        $(s).addClass("page-highlight-off");
    }
}

onLoad();