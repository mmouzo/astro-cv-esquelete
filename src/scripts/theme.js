export function initTheme() {
    if (localStorage.getItem("theme") === null) {
        document.documentElement.setAttribute("data-theme", "lofi");
    } else {
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme")
        );
    }
}
