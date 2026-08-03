/* =========================================================
   AL-WAFAA FOR TRADING
   MOBILE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const mobileNavigation =
        document.getElementById("mobileNavigation");


    /* -----------------------------------------------------
       SAFETY CHECK
       ----------------------------------------------------- */

    if (!menuButton || !mobileNavigation) {
        return;
    }


    /* -----------------------------------------------------
       OPEN / CLOSE MOBILE MENU
       ----------------------------------------------------- */

    menuButton.addEventListener("click", function () {

        const isOpen =
            mobileNavigation.classList.toggle("is-open");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* -----------------------------------------------------
       CLOSE MENU AFTER CLICKING A LINK
       ----------------------------------------------------- */

    const navigationLinks =
        mobileNavigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavigation.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    /* -----------------------------------------------------
       CLOSE MENU WITH ESCAPE KEY
       ----------------------------------------------------- */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            mobileNavigation.classList.contains("is-open")
        ) {

            mobileNavigation.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.focus();

        }

    });


    /* -----------------------------------------------------
       CLOSE MENU WHEN SCREEN BECOMES DESKTOP SIZE
       ----------------------------------------------------- */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            mobileNavigation.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});