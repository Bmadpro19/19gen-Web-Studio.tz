/* =========================================================
   19GEN™ WEB STUDIO
   PREMIUM MAIN JAVASCRIPT
   FINAL VERSION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const STUDIO_NAME = "19GEN™ Web Studio";
    const PHONE_NUMBER = "+255742634709";
    const PHONE_DISPLAY = "+255 742 634 709";
    const EMAIL = "bmadpro19@gmail.com";

    let selectedPackage = "";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuButton =
        document.getElementById("mobileMenuButton");

    const mobileNav =
        document.getElementById("mobileNav");

    const selectedPackageBox =
        document.getElementById("selectedPackage");

    const packageName =
        document.getElementById("packageName");

    const callButton =
        document.getElementById("callButton");

    const emailButton =
        document.getElementById("emailButton");

    const smsButton =
        document.getElementById("smsButton");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const closeMobileMenu = () => {

        if (!mobileNav || !menuButton) return;

        mobileNav.classList.remove("active");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open menu"
        );
    };


    const openMobileMenu = () => {

        if (!mobileNav || !menuButton) return;

        mobileNav.classList.add("active");

        menuButton.textContent = "✕";

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Close menu"
        );
    };


    if (menuButton && mobileNav) {

        menuButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    mobileNav.classList.contains("active");

                if (isOpen) {

                    closeMobileMenu();

                } else {

                    openMobileMenu();

                }

            }
        );


        mobileNav
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {
                        closeMobileMenu();
                    }
                );

            });


        document.addEventListener(
            "click",
            (event) => {

                if (
                    !mobileNav.classList.contains(
                        "active"
                    )
                ) {
                    return;
                }

                const clickedInsideMenu =
                    mobileNav.contains(event.target);

                const clickedButton =
                    menuButton.contains(event.target);

                if (
                    !clickedInsideMenu &&
                    !clickedButton
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

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

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       TRANSLATIONS
    ===================================================== */
    window.translations = {
      en: {
        navHome:"Home",navServices:"Services",navWork:"Our Work",navPricing:"Pricing",navStart:"Start a Project",language:"Kiswahili",
        heroEyebrow:"WEB DESIGN FOR MODERN BUSINESSES",heroTitle:"Your business deserves",heroTitleAccent:"a website that gets noticed.",
        heroDescription:"We create modern, fast and professional websites for hotels, restaurants and businesses across Tanzania.",heroButton:"View Packages ↗",heroContact:"Talk to 19GEN",
        trustLanding:"Landing Page",trustMobile:"Mobile Responsive",trustTanzania:"Built in Tanzania",
        premiumDesign:"Premium Design",premiumSub:"Built around your brand",
        servicesEyebrow:"WHAT WE DO",servicesTitle:"More than",servicesAccent:"a website.",servicesDescription:"We build a complete digital first impression for your business — from design to launch.",
        service1Title:"Custom Design",service1Text:"A polished visual experience designed around your business and brand.",
        service2Title:"Mobile First",service2Text:"Your customers are on their phones. Your website will look great there.",
        service3Title:"Launch Ready",service3Text:"Domain, hosting, SSL and deployment can all be handled for you.",
        service4Title:"Business Focused",service4Text:"Clear calls-to-action that help visitors find, contact and choose your business.",
        workEyebrow:"OUR WORK",workTitle:"Websites built to",workAccent:"stand out.",workDescription:"Realistic website concepts designed for modern Tanzanian businesses.",
        hotel:"HOTEL",restaurant:"RESTAURANT",business:"BUSINESS",hotels:"HOTELS",restaurants:"RESTAURANTS",businesses:"BUSINESSES",startups:"STARTUPS",
        pricingEyebrow:"WEBSITE PACKAGES",pricingTitle:"Professional websites.",pricingAccent:"Simple pricing.",pricingDescription:"Choose the package that fits your business. You can change your choice before contacting us.",
        landingLabel:"LANDING PAGE",landingDescription:"A clean, modern one-page website for individuals, products and small businesses.",landingFeature1:"One professional landing page",landingFeature2:"Mobile responsive",landingFeature3:"Business information",landingFeature4:"Contact / WhatsApp section",landingFeature5:"Modern custom design",landingFeature6:"Deployment ready",chooseLanding:"Choose Landing Page →",
        starterLabel:"STARTER",starterDescription:"For restaurants and small businesses that need a strong online presence.",starter1:"1–3 pages",starter2:"Mobile responsive",starter3:"Gallery & services/menu",starter4:"Google Maps",starter5:"Call & email contact",starter6:"SSL & deployment",chooseStarter:"Choose Starter →",
        professionalLabel:"PROFESSIONAL",professionalDescription:"A complete professional website for a growing business.",professional1:"4–6 pages",professional2:"Premium custom design",professional3:"Menu/services + gallery",professional4:"Booking/inquiry form",professional5:"SEO setup",professional6:"Domain + hosting for 1 year",chooseProfessional:"Choose Professional →",popular:"MOST POPULAR",
        proLabel:"HOTEL / BUSINESS PRO",proDescription:"A premium website experience for hotels, larger businesses and established brands.",pro1:"6–10 pages",pro2:"Premium custom design",pro3:"Advanced gallery & services",pro4:"Booking/inquiry system",pro5:"SEO + performance setup",pro6:"Domain + hosting for 1 year",choosePro:"Choose Pro →",
        selectedLabel:"SELECTED PACKAGE",noPackage:"No package selected",clearPackage:"Clear",
        contactEyebrow:"LET'S WORK TOGETHER",contactTitle:"Ready to build your website?",contactAccent:"Let's talk.",contactDescription:"Tell us what you need and we'll help you choose the right package.",contactPackageLabel:"YOUR PACKAGE",emailButton:"Email Us",smsButton:"Send SMS",callButton:"Call 19GEN",
        careEyebrow:"AFTER LAUNCH",careTitle:"We can help you grow.",careAccent:"After launch.",careText:"Need updates, new pages or ongoing support? We can keep your website fresh and working smoothly.",careButton:"Get Support",
        paymentStrong:"Simple payment:",paymentText:"25% deposit to begin. The remaining 75% is paid before final handover or launch.",locationText:"Dar es Salaam, Tanzania",footerText:"Built for ambitious Tanzanian businesses.",
        businessContact:"BUSINESS CONTACT",sendSms:"Send us an SMS",
        hostingLabel:"HOSTING",hostingUsLabel:"We host it for you",hostingUsSub:"Domain, hosting &amp; SSL handled by us",hostingSelfLabel:"I'll host it myself",hostingSelfSub:"You already have hosting or a domain",hostingNote:"Not sure which is best? We'll explain both when we talk."
      },
      sw: {
        navHome:"Mwanzo",navServices:"Huduma",navWork:"Kazi Zetu",navPricing:"Bei",navStart:"Anza Mradi",language:"English",
        heroEyebrow:"UBUNIFU WA TOVUTI KWA BIASHARA ZA KISASA",heroTitle:"Biashara yako inastahili",heroTitleAccent:"tovuti inayovutia na kukumbukwa.",
        heroDescription:"Tunatengeneza tovuti za kisasa, zenye kasi na za kitaalamu kwa hoteli, migahawa na biashara Tanzania nzima.",heroButton:"Angalia Vifurushi ↗",heroContact:"Wasiliana na 19GEN",
        trustLanding:"Landing Page",trustMobile:"Inafanya kazi simu",trustTanzania:"Imetengenezwa Tanzania",
        premiumDesign:"Ubunifu wa Kitaalamu",premiumSub:"Imejengwa kulingana na brand yako",
        servicesEyebrow:"TUNACHOFANYA",servicesTitle:"Zaidi ya",servicesAccent:"tovuti tu.",servicesDescription:"Tunajenga mwonekano kamili wa kidijitali wa biashara yako — kuanzia ubunifu hadi kuzinduliwa.",
        service1Title:"Ubunifu Maalum",service1Text:"Muonekano wa kisasa uliobuniwa kulingana na biashara na brand yako.",
        service2Title:"Mobile First",service2Text:"Wateja wako wako kwenye simu. Tovuti yako itaonekana vizuri kwenye simu zao.",
        service3Title:"Tayari Kuzinduliwa",service3Text:"Domain, hosting, SSL na deployment vinaweza kushughulikiwa na sisi.",
        service4Title:"Inalenga Biashara",service4Text:"Buttons na maelekezo yaliyo wazi yanayowasaidia wageni kukupata, kuwasiliana na kuchagua huduma yako.",
        workEyebrow:"KAZI ZETU",workTitle:"Tovuti zilizotengenezwa ili",workAccent:"zitofautike.",workDescription:"Mifano ya tovuti iliyobuniwa kwa biashara za kisasa Tanzania.",
        hotel:"HOTELI",restaurant:"MGAHAWA",business:"BIASHARA",hotels:"HOTELI",restaurants:"MIGAHAWA",businesses:"BIASHARA",startups:"STARTUPS",
        pricingEyebrow:"PACKAGES ZA TOVUTI",pricingTitle:"Tovuti za kitaalamu.",pricingAccent:"Bei rahisi.",pricingDescription:"Chagua package inayofaa biashara yako. Unaweza kubadilisha chaguo lako kabla ya kuwasiliana nasi.",
        landingLabel:"LANDING PAGE",landingDescription:"Tovuti safi ya ukurasa mmoja kwa watu binafsi, bidhaa na biashara ndogo.",landingFeature1:"Landing page moja ya kitaalamu",landingFeature2:"Inafanya kazi kwenye simu",landingFeature3:"Taarifa za biashara",landingFeature4:"Sehemu ya Mawasiliano / WhatsApp",landingFeature5:"Ubunifu wa kisasa maalum",landingFeature6:"Tayari kwa deployment",chooseLanding:"Chagua Landing Page →",
        starterLabel:"STARTER",starterDescription:"Kwa migahawa na biashara ndogo zinazohitaji uwepo mzuri mtandaoni.",starter1:"Kurasa 1–3",starter2:"Inafanya kazi kwenye simu",starter3:"Gallery & huduma/menu",starter4:"Google Maps",starter5:"Mawasiliano ya simu & email",starter6:"SSL & deployment",chooseStarter:"Chagua Starter →",
        professionalLabel:"PROFESSIONAL",professionalDescription:"Tovuti kamili ya kitaalamu kwa biashara inayokua.",professional1:"Kurasa 4–6",professional2:"Ubunifu maalum wa kiwango cha juu",professional3:"Menu/huduma + gallery",professional4:"Fomu ya booking/maulizo",professional5:"SEO setup",professional6:"Domain + hosting kwa mwaka 1",chooseProfessional:"Chagua Professional →",popular:"INAYOPENDWA ZAIDI",
        proLabel:"HOTELI / BIASHARA PRO",proDescription:"Tovuti ya kiwango cha juu kwa hoteli, biashara kubwa na brand zilizoimarika.",pro1:"Kurasa 6–10",pro2:"Ubunifu maalum wa kiwango cha juu",pro3:"Gallery & huduma za kisasa",pro4:"Mfumo wa booking/maulizo",pro5:"SEO + performance setup",pro6:"Domain + hosting kwa mwaka 1",choosePro:"Chagua Pro →",
        selectedLabel:"PACKAGE ILIYOCHAGULIWA",noPackage:"Hakuna package iliyochaguliwa",clearPackage:"Ondoa",
        contactEyebrow:"TUFANYE KAZI PAMOJA",contactTitle:"Uko tayari kujenga tovuti yako?",contactAccent:"Tuongee.",contactDescription:"Tuambie unachohitaji na tutakusaidia kuchagua package inayokufaa.",contactPackageLabel:"PACKAGE YAKO",emailButton:"Tutumie Email",smsButton:"Tuma SMS",callButton:"Piga 19GEN",
        careEyebrow:"BAADA YA KUZINDULIWA",careTitle:"Tunaweza kukusaidia kukua.",careAccent:"Baada ya launch.",careText:"Unahitaji updates, kurasa mpya au support endelevu? Tunaweza kuifanya tovuti yako iwe mpya na ifanye kazi vizuri.",careButton:"Pata Support",
        paymentStrong:"Malipo rahisi:",paymentText:"Malipo ya awali ya asilimia 25 kuanza kazi. Asilimia 75 iliyobaki inalipwa kabla ya kukamilisha na kuzindua tovuti.",locationText:"Dar es Salaam, Tanzania",footerText:"Imejengwa kwa ajili ya biashara za Tanzania zenye malengo makubwa.",
        businessContact:"MAWASILIANO YA BIASHARA",sendSms:"Tutumie SMS",
        hostingLabel:"HOSTING",hostingUsLabel:"Mtuhostie ninyi",hostingUsSub:"Domain, hosting na SSL tutashughulikia sisi",hostingSelfLabel:"Nitahost mwenyewe",hostingSelfSub:"Tayari una hosting au domain yako",hostingNote:"Hujaamua? Tutakueleza chaguo zote mbili tukiongea."
      }
    };

    /* =====================================================
       LANGUAGE + PACKAGE SELECTION
    ===================================================== */

    const languageSwitcher = document.getElementById("languageSwitcher");
    const mobileLanguageSwitcher = document.getElementById("mobileLanguageSwitcher");
    const languageLabel = document.getElementById("languageLabel");
    const clearPackageButton = document.getElementById("clearPackage");
    const contactPackageName = document.getElementById("contactPackageName");

    let currentLanguage = localStorage.getItem("19gen-language") || "en";
    let selectedPackageKey = localStorage.getItem("19gen-selected-package") || "";
    let hostingChoiceKey = localStorage.getItem("19gen-hosting-choice") || "";

    const packageButtons = document.querySelectorAll(".choose-package");
    const hostingButtons = document.querySelectorAll(".hosting-option");

    const packageData = {
        landing: {
            en: "Landing Page — TSh 100,000",
            sw: "Landing Page — TSh 100,000"
        },
        starter: {
            en: "Starter — TSh 150,000",
            sw: "Starter — TSh 150,000"
        },
        professional: {
            en: "Professional — TSh 300,000",
            sw: "Professional — TSh 300,000"
        },
        pro: {
            en: "Hotel / Business Pro — TSh 450,000",
            sw: "Hotel / Business Pro — TSh 450,000"
        }
    };

    const getPackageKey = (button) => button?.dataset.packageKey || "";

    const getPackageName = (key) => {
        const item = packageData[key];
        return item ? item[currentLanguage] : "";
    };

    const updatePackageUI = () => {
        const name = getPackageName(selectedPackageKey);
        const hasSelection = Boolean(name);

        packageButtons.forEach((button) => {
            const isSelected = getPackageKey(button) === selectedPackageKey;
            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });

        if (selectedPackageBox) {
            selectedPackageBox.classList.toggle("has-selection", hasSelection);
        }

        if (packageName) {
            packageName.textContent = hasSelection
                ? name
                : (currentLanguage === "sw" ? "Hakuna package iliyochaguliwa" : "No package selected");
        }

        if (contactPackageName) {
            contactPackageName.textContent = hasSelection
                ? name
                : (currentLanguage === "sw" ? "Hakuna package iliyochaguliwa" : "No package selected");
        }

        if (clearPackageButton) {
            clearPackageButton.hidden = !hasSelection;
        }
    };

    const updateContactLinks = () => {
        const name = getPackageName(selectedPackageKey);
        const sw = currentLanguage === "sw";

        let smsMessage = sw
            ? `Habari ${STUDIO_NAME}, nina nia ya kupata huduma za website.`
            : `Hello ${STUDIO_NAME}, I am interested in your website services.`;

        let emailSubject = sw
            ? `Ombi la Website - ${STUDIO_NAME}`
            : `19GEN Website Project Inquiry`;

        let emailBody = sw
            ? `Habari ${STUDIO_NAME},%0D%0A%0D%0ANina nia ya kupata huduma za website.`
            : `Hello ${STUDIO_NAME},%0D%0A%0D%0AI am interested in your website services.`;

        if (name) {
            smsMessage = sw
                ? `Habari ${STUDIO_NAME}, nimechagua package ya ${name}. Naomba maelezo zaidi.`
                : `Hello ${STUDIO_NAME}, I have selected the ${name} package. Please contact me with more details.`;

            emailSubject = sw
                ? `Package iliyochaguliwa - ${name}`
                : `Website Inquiry - ${name}`;

            emailBody = sw
                ? `Habari ${STUDIO_NAME},%0D%0A%0D%0ANina nia ya kupata huduma za website.%0D%0A%0D%0APackage niliyouchagua: ${name}%0D%0A%0D%0ANaomba mnipatie maelezo zaidi.`
                : `Hello ${STUDIO_NAME},%0D%0A%0D%0AI am interested in your website services.%0D%0A%0D%0ASelected Package: ${name}%0D%0A%0D%0APlease contact me with more details.`;
        }

        if (hostingChoiceKey) {
            const hostingLine = sw
                ? (hostingChoiceKey === "us"
                    ? "Kuhusu hosting: Ninataka 19GEN mnihostie (domain + hosting)."
                    : "Kuhusu hosting: Nitahost mwenyewe (nina domain/hosting yangu).")
                : (hostingChoiceKey === "us"
                    ? "Hosting preference: I would like 19GEN to host the website (domain + hosting)."
                    : "Hosting preference: I will host the website myself (I have my own domain/hosting).");

            smsMessage = `${smsMessage} ${hostingLine}`;
            emailBody = `${emailBody}%0D%0A%0D%0A${hostingLine}`;
        }

        if (smsButton) {
            smsButton.href = `sms:${PHONE_NUMBER}?body=${encodeURIComponent(smsMessage)}`;
        }

        if (emailButton) {
            emailButton.href = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
        }
    };

    const selectPackage = (key) => {
        if (!packageData[key]) return;

        selectedPackageKey = key;
        localStorage.setItem("19gen-selected-package", key);
        updatePackageUI();
        updateContactLinks();
    };

    packageButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const key = getPackageKey(button);
            if (!key) return;

            selectPackage(key);

            button.classList.add("button-clicked");
            window.setTimeout(() => button.classList.remove("button-clicked"), 220);
        });
    });

    if (clearPackageButton) {
        clearPackageButton.addEventListener("click", (event) => {
            event.preventDefault();
            selectedPackageKey = "";
            localStorage.removeItem("19gen-selected-package");
            updatePackageUI();
            updateContactLinks();
        });
    }

    /* -----------------------------------------------
       HOSTING CHOICE
    ------------------------------------------------ */

    const updateHostingUI = () => {
        hostingButtons.forEach((button) => {
            const isSelected = button.dataset.hostingKey === hostingChoiceKey;
            button.classList.toggle("selected", isSelected);
            button.setAttribute("aria-pressed", String(isSelected));
        });
    };

    const selectHosting = (key) => {
        hostingChoiceKey = hostingChoiceKey === key ? "" : key;
        localStorage.setItem("19gen-hosting-choice", hostingChoiceKey);
        updateHostingUI();
        updateContactLinks();
    };

    hostingButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            selectHosting(button.dataset.hostingKey);
        });
    });

    /* -----------------------------------------------
       LANGUAGE SWITCHER
    ------------------------------------------------ */

    const setLanguage = (lang) => {
        currentLanguage = lang === "sw" ? "sw" : "en";
        localStorage.setItem("19gen-language", currentLanguage);
        document.documentElement.lang = currentLanguage === "sw" ? "sw" : "en";

        if (languageLabel) {
            languageLabel.textContent = currentLanguage === "en" ? "SW" : "EN";
        }

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            const value = window.translations?.[currentLanguage]?.[key];
            if (value !== undefined) element.innerHTML = value;
        });

        if (mobileLanguageSwitcher) {
            const mobileText = mobileLanguageSwitcher.querySelector("[data-i18n='language']");
            if (mobileText && window.translations?.[currentLanguage]?.language) {
                mobileText.textContent = window.translations[currentLanguage].language;
            }
        }

        updatePackageUI();
        updateHostingUI();
        updateContactLinks();
    };

    const toggleLanguage = (event) => {
        event.preventDefault();
        setLanguage(currentLanguage === "en" ? "sw" : "en");
    };

    languageSwitcher?.addEventListener("click", toggleLanguage);
    mobileLanguageSwitcher?.addEventListener("click", toggleLanguage);

    /* Initialize package + language state. */
    setLanguage(currentLanguage);
    /* =====================================================
       CALL BUTTON
    ===================================================== */

    if (callButton) {

        callButton.href =
            `tel:${PHONE_NUMBER}`;

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, " +
            ".portfolio-card, " +
            ".pricing-card, " +
            ".landing-feature, " +
            ".landing-card"
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.10,

                    rootMargin:
                        "0px 0px -35px 0px"
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const footerYear =
        document.querySelector(
            ".site-footer span"
        );


    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} ` +
            `${STUDIO_NAME}`;

    }


    /* =====================================================
       DESKTOP HERO PARALLAX
    ===================================================== */

    const heroPreview =
        document.querySelector(
            ".hero-preview"
        );

    const browser =
        heroPreview?.querySelector(
            ".browser-window"
        );


    const canHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );


    if (
        heroPreview &&
        browser &&
        canHover.matches
    ) {

        heroPreview.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroPreview.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height;


                const rotateY =
                    (x - 0.5) * 5;


                const rotateX =
                    (y - 0.5) * -5;


                browser.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        heroPreview.addEventListener(
            "mouseleave",
            () => {

                browser.style.transform =
                    "rotate(1.5deg)";

            }
        );

    }


    /* =====================================================
       RESIZE SAFETY
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900 &&
                mobileNav
            ) {

                closeMobileMenu();

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PREVENT DOUBLE TAP / UNWANTED ZOOM FEEL
       ON INTERACTIVE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            "a, button"
        )
        .forEach((element) => {

            element.addEventListener(
                "touchstart",
                () => {},
                {
                    passive: true
                }
            );

        });


    /* =====================================================
       PAGE READY
    ===================================================== */

    requestAnimationFrame(() => {

        document.body.classList.add(
            "page-ready"
        );

    });


    /* =====================================================
       DEBUG / DEVELOPMENT INFO
    ===================================================== */

    console.log(
        `${STUDIO_NAME} loaded successfully.`
    );

});
/* =====================================================
   PREMIUM PORTFOLIO IMAGE PREVIEW
   Cards open a modern fullscreen lightbox.
   No "View Demo" button is shown.
===================================================== */
(function initPortfolioLightbox() {
    const lightbox = document.getElementById("portfolioLightbox");
    const image = document.getElementById("portfolioLightboxImage");
    const type = document.getElementById("portfolioLightboxType");
    const title = document.getElementById("portfolioLightboxTitle");
    const cards = document.querySelectorAll(".portfolio-card");

    if (!lightbox || !image || !type || !title || !cards.length) return;

    let lastFocusedCard = null;

    const close = () => {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("portfolio-lightbox-open");
        image.src = "";
        if (lastFocusedCard) lastFocusedCard.focus();
    };

    const open = (card) => {
        const bg = card.style.backgroundImage || getComputedStyle(card).backgroundImage;
        const match = bg.match(/url\(["']?(.*?)["']?\)/);
        if (!match) return;

        const heading = card.querySelector("h3");
        const label = card.querySelector("span");

        image.src = match[1];
        image.alt = heading ? `${heading.textContent.trim()} portfolio preview` : "Portfolio project preview";
        title.textContent = heading ? heading.textContent.trim() : "Portfolio Project";
        type.textContent = label ? label.textContent.trim() : "PORTFOLIO";

        lastFocusedCard = card;
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("portfolio-lightbox-open");

        requestAnimationFrame(() => {
            lightbox.querySelector(".portfolio-lightbox-close")?.focus();
        });
    };

    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a, button")) return;
            open(card);
        });

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open(card);
            }
        });
    });

    lightbox.querySelectorAll("[data-close-lightbox]").forEach((element) => {
        element.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            close();
        }
    });
})();
