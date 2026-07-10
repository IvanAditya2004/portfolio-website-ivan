/*==================================================
            PORTFOLIO JAVASCRIPT
            Muhammad Ivan Aditya
==================================================*/


/*==================================================
                SELECT ELEMENT
==================================================*/

const loader = document.getElementById("loader");

const typing = document.getElementById("typing");

const progressBar = document.getElementById("progress-bar");

const cursorGlow = document.getElementById("cursor-glow");

const header = document.querySelector(".header");


/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

    }, 900);

});


/*==================================================
            TYPING ANIMATION
==================================================*/

const words = [

    "Web Developer",

    "Visual Design",
    
    "Vidio Editing",

    "IT Support",

    "System Analyst",

    "Fresh Graduate"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

let typingSpeed = 110;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(

            0,

            letterIndex++

        );

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(

                typingEffect,

                1400

            );

            return;

        }

    } else {

        typing.textContent = currentWord.substring(

            0,

            letterIndex--

        );

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(

        typingEffect,

        deleting ? 60 : typingSpeed

    );

}

typingEffect();


/*==================================================
            CURSOR GLOW
==================================================*/

window.addEventListener(

    "mousemove",

    (e) => {

        cursorGlow.style.left =

            e.clientX + "px";

        cursorGlow.style.top =

            e.clientY + "px";

    }

);


/*==================================================
            HEADER EFFECT
==================================================*/

window.addEventListener(

    "scroll",

    () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

);


/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

window.addEventListener(

    "scroll",

    () => {

        const totalHeight =

            document.documentElement.scrollHeight -

            window.innerHeight;

        const progress =

            (window.scrollY / totalHeight) * 100;

        progressBar.style.width =

            progress + "%";

    }

);


/*==================================================
            SMOOTH ACTIVE LINK
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(

    ".nav-menu a"

);

window.addEventListener(

    "scroll",

    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =

                section.offsetTop - 150;

            if (

                pageYOffset >= sectionTop

            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") ===

                "#" + current

            ) {

                link.classList.add("active");

            }

        });

    }

);


/*==================================================
                END PART 1
==================================================*/

/*==================================================
            HAMBURGER MENU
==================================================*/

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});



/*==================================================
        CLOSE MENU AFTER CLICK
==================================================*/

document.querySelectorAll(".nav-menu a")

.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    });

});



/*==================================================
        CLOSE MENU WHEN RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>768){

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

    }

});



/*==================================================
                BACK TO TOP
==================================================*/

const backToTop =

document.getElementById("backToTop");

window.addEventListener(

"scroll",

()=>{

    if(window.scrollY>450){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});



backToTop.addEventListener(

"click",

()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/*==================================================
            SCROLL REVEAL
==================================================*/

const revealElements=

document.querySelectorAll(

".section, .skill-card, .achievement-card, .project-card, .contact-card"

);



const revealOnScroll=()=>{

    const windowHeight=

    window.innerHeight;

    revealElements.forEach(el=>{

        const top=

        el.getBoundingClientRect().top;

        if(top<windowHeight-120){

            el.classList.add("show");

        }

    });

};



window.addEventListener(

"scroll",

revealOnScroll

);



window.addEventListener(

"load",

revealOnScroll

);



/*==================================================
            HERO FLOAT EFFECT
==================================================*/

const heroImage=

document.querySelector(".hero-image");



window.addEventListener(

"mousemove",

(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.pageX)/45;

    const y=(window.innerHeight/2-e.pageY)/45;

    heroImage.style.transform=

    `translate(${x}px,${y}px)`;

});



/*==================================================
            BUTTON RIPPLE
==================================================*/

const buttons=

document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener(

"mouseenter",

()=>{

btn.style.transform=

"translateY(-5px) scale(1.03)";

});



btn.addEventListener(

"mouseleave",

()=>{

btn.style.transform=

"translateY(0px) scale(1)";

});

});



/*==================================================
            IMAGE HOVER EFFECT
==================================================*/

const images=

document.querySelectorAll(

".project-image img"

);

images.forEach(img=>{

img.addEventListener(

"mousemove",

(e)=>{

const rect=

img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

img.style.transformOrigin=

`${x}px ${y}px`;

});

});



/*==================================================
            NAVBAR HIDE
==================================================*/

let lastScroll=0;

window.addEventListener(

"scroll",

()=>{

const current=

window.pageYOffset;

if(current>lastScroll && current>120){

header.style.transform=

"translateY(-100%)";

}

else{

header.style.transform=

"translateY(0)";

}

lastScroll=current;

});



/*==================================================
            END PART 2
==================================================*/

/*==================================================
            ACHIEVEMENT COUNTER
==================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const achievement = document.querySelector(".achievement");

    if (!achievement) return;

    const trigger = achievement.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 80);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = current;

                    requestAnimationFrame(updateCounter);

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);

window.addEventListener("load", startCounter);



/*==================================================
                PROJECT SLIDER
==================================================*/

const projectCards = document.querySelectorAll(".project-card");

const nextProject = document.getElementById("nextProject");

const prevProject = document.getElementById("prevProject");

let currentProject = 0;

function showProject(index) {

    projectCards.forEach(card => {

        card.classList.remove("active");

    });

    projectCards[index].classList.add("active");

}

showProject(currentProject);



/*==================================================
                NEXT PROJECT
==================================================*/

if(nextProject){

nextProject.addEventListener("click",()=>{

currentProject++;

if(currentProject>=projectCards.length){

currentProject=0;

}

showProject(currentProject);

});

}



/*==================================================
            PREVIOUS PROJECT
==================================================*/

if(prevProject){

prevProject.addEventListener("click",()=>{

currentProject--;

if(currentProject<0){

currentProject=projectCards.length-1;

}

showProject(currentProject);

});

}



/*==================================================
            AUTO PROJECT SLIDER
==================================================*/

let autoSlider = setInterval(()=>{

currentProject++;

if(currentProject>=projectCards.length){

currentProject=0;

}

showProject(currentProject);

},5000);



/*==================================================
        STOP AUTO SLIDE WHEN HOVER
==================================================*/

const projectWrapper = document.querySelector(".project-wrapper");

if(projectWrapper){

projectWrapper.addEventListener("mouseenter",()=>{

clearInterval(autoSlider);

});



projectWrapper.addEventListener("mouseleave",()=>{

autoSlider=setInterval(()=>{

currentProject++;

if(currentProject>=projectCards.length){

currentProject=0;

}

showProject(currentProject);

},5000);

});

}



/*==================================================
            KEYBOARD CONTROL
==================================================*/

window.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

currentProject++;

if(currentProject>=projectCards.length){

currentProject=0;

}

showProject(currentProject);

}



if(e.key==="ArrowLeft"){

currentProject--;

if(currentProject<0){

currentProject=projectCards.length-1;

}

showProject(currentProject);

}

});



/*==================================================
            PROJECT TOUCH MOBILE
==================================================*/

let touchStartX = 0;

let touchEndX = 0;

if(projectWrapper){

projectWrapper.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].screenX;

});



projectWrapper.addEventListener("touchend",(e)=>{

touchEndX=e.changedTouches[0].screenX;

handleSwipe();

});

}



function handleSwipe(){

if(touchEndX<touchStartX-50){

currentProject++;

if(currentProject>=projectCards.length){

currentProject=0;

}

showProject(currentProject);

}



if(touchEndX>touchStartX+50){

currentProject--;

if(currentProject<0){

currentProject=projectCards.length-1;

}

showProject(currentProject);

}

}



/*==================================================
            PROJECT FADE
==================================================*/

projectCards.forEach(card=>{

card.addEventListener("animationend",()=>{

card.style.opacity="1";

});

});



/*==================================================
            END PART 3
==================================================*/

/*==================================================
            PARALLAX HERO
==================================================*/

const heroSection = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!heroSection) return;

    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    heroSection.style.backgroundPosition =
        `${50 + moveX}% ${50 + moveY}%`;

});


/*==================================================
            FLOATING ANIMATION
==================================================*/

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    let offset = index * 0.8;

    setInterval(() => {

        const y = Math.sin(Date.now() / 800 + offset) * 8;

        card.style.transform = `translateY(${y}px)`;

    }, 30);

});


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==================================================
            RANDOM GLOW EFFECT
==================================================*/

const cards = document.querySelectorAll(

".skill-card,.project-card,.achievement-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=

"0 0 40px rgba(56,189,248,.25)";

});



card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


/*==================================================
            PRELOAD IMAGE
==================================================*/

const preloadImages = [

"assets/img/profile.png",

"assets/img/project1.jpg",

"assets/img/project2.jpg",

"assets/img/project3.jpg"

];

preloadImages.forEach(src=>{

const img=new Image();

img.src=src;

});


/*==================================================
            DISABLE RIGHT CLICK
==================================================*/

// Hapus bagian ini jika nanti ingin mengizinkan klik kanan

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});


/*==================================================
            DISABLE IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/*==================================================
            PERFORMANCE
==================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},250);

});


/*==================================================
            PAGE VISIBILITY
==================================================*/

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

console.log("Portfolio Hidden");

}else{

console.log("Portfolio Active");

}

});


/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.clear();

console.log(

"%cMuhammad Ivan Aditya Portfolio",

"color:#38bdf8;font-size:22px;font-weight:bold;"

);

console.log(

"%cThanks for visiting 🚀",

"color:#8b5cf6;font-size:14px;"

);

console.log(

"%cBuilt with HTML CSS JavaScript",

"color:white;font-size:12px;"

);


/*==================================================
            INITIALIZE
==================================================*/

window.addEventListener("load",()=>{

showProject(currentProject);

startCounter();

revealOnScroll();

});


/*==================================================
                END
==================================================*/