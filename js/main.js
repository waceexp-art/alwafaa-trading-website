/* =========================================================
   AL-WAFAA FOR TRADING
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       1. CURRENT YEAR
       Automatically updates elements using .current-year
       ===================================================== */

    const currentYearElements =
        document.querySelectorAll(".current-year");

    currentYearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       2. HEADER SHADOW ON SCROLL
       Adds a subtle shadow when the visitor scrolls
       ===================================================== */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       3. SMOOTH INTERNAL LINKS
       Smoothly scrolls links pointing to sections
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       4. IMAGE ERROR HANDLING
       Prevents broken images from creating ugly layouts
       ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                this.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       5. EXTERNAL LINKS
       Opens external links safely in a new tab
       ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http://"], a[href^="https://"]'
        );


    externalLinks.forEach(function (link) {

        const currentHost =
            window.location.hostname;


        try {

            const linkURL =
                new URL(
                    link.href,
                    window.location.href
                );


            if (
                linkURL.hostname &&
                linkURL.hostname !== currentHost
            ) {

                link.target = "_blank";

                link.rel =
                    "noopener noreferrer";

            }

        } catch (error) {

            /* Ignore invalid URLs */

        }

    });


    /* =====================================================
       6. PREVENT DOUBLE SUBMISSION
       Applies to forms with the class .prevent-double-submit
       ===================================================== */

    const forms =
        document.querySelectorAll(
            "form.prevent-double-submit"
        );


    forms.forEach(function (form) {

        form.addEventListener(
            "submit",
            function () {

                const submitButton =
                    form.querySelector(
                        'button[type="submit"], input[type="submit"]'
                    );


                if (!submitButton) {
                    return;
                }


                if (
                    submitButton.dataset.submitted ===
                    "true"
                ) {

                    return;

                }


                submitButton.dataset.submitted =
                    "true";


                submitButton.classList.add(
                    "is-submitting"
                );


                if (
                    submitButton.tagName
                    .toLowerCase() ===
                    "button"
                ) {

                    submitButton.disabled =
                        true;

                }

            }
        );

    });


    /* =====================================================
       7. SCROLL REVEAL
       Lightweight animation for elements using
       .reveal-on-scroll
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal-on-scroll"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    }


});