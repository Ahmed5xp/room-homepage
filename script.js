function makeCross (){
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');
    var overlay = document.getElementById('overlay');
    bar3.classList.toggle("barToggle3");
    bar2.classList.toggle("barToggle2");
    bar1.classList.toggle("barToggle1");
        var element = document.getElementById("navbar");
        var shown = element.getAttribute("data-isshown");
        if (shown == "true") {
        element.setAttribute("data-isshown", "false");
        element.style.top = "-8rem";
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";
        overlay.style.background = "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))"

        } else {
        bar1.style.backgroundColor = "black";
        bar2.style.backgroundColor = "black";
        bar3.style.backgroundColor = "black";
        overlay.style.background = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))"
        element.setAttribute("data-isshown", "true");
        element.style.top = "0";
        }
    }
    let slideIndex = 1;
    showSlides(slideIndex);
    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    let headerTextArray = ['Discover innovative ways to decorate','We are available all across the globe',
'Manufactured with the best materials'];
let mainTextArray = ['We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. ,Create a room in your own style with our collection and make your property a reflection of you and what you love.',
' With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.']
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("hero-img");
        let headerText = document.getElementsByClassName("main-header");
        let mainText = document.getElementsByClassName("main-text");
        let mainCTA = document.getElementsByClassName("main-CTA");
        let main = document.getElementsByClassName("main");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        headerText[i].style.display = "none";
        mainText[i].style.display = "none";
    }
        slides[slideIndex-1].style.display = "block";
        headerText[slideIndex-1].style.display = "block";
        mainText[slideIndex-1].style.display = "block";
    }

    let cta = document.getElementById("cta");

    cta.addEventListener("mouseenter",() => {
        document.getElementById("arrow").style.transition = "0.4s";
        document.getElementById("arrow").style.marginLeft = "0.2rem";
        setTimeout(()=> {
            document.getElementById("arrow").style.marginLeft = "3rem";
        },300);
    })

    cta.addEventListener("mouseleave",() => {
        document.getElementById("arrow").style.transition = "0.4s";
        document.getElementById("arrow").style.marginLeft = "1rem";
    })