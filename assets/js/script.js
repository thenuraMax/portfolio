function changeView() {
    var loader = document.getElementById("loader");
    var page = document.getElementById("page");

    setTimeout(function () {
        loader.classList.toggle("d-none");
    },1500);

    VANTA.GLOBE({
        el: "#my-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: 0x0
    })

}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    // alert("ok");
    document.getElementById("myDropdown").classList.toggle("d-block");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        // alert("ok");
        var dropdowns = document.getElementsByClassName("dropdown4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('d-block')) {
                openDropdown.classList.remove('d-block');
                // alert("ok");
            }
        }
    }
}

window.innerWidth < 768 && [].slice.call(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach((function (t) { t.classList.remove("animated"), t.removeAttribute("data-bss-hover-animate"), t.removeAttribute("data-aos"), t.removeAttribute("data-bss-parallax-bg"), t.removeAttribute("data-bss-scroll-zoom") })), document.addEventListener("DOMContentLoaded", (function () { "AOS" in window && AOS.init() }), !1), $("[data-toggle=tooltip]").tooltip();
