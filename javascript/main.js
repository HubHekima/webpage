const hamburg = document.getElementById("hamburg");
const ham_menu = document.querySelector(".navigation_column_bar");

hamburg.addEventListener('click', function() {
    if(hamburg.classList.contains("fa-bars")){
        hamburg.classList.remove("fa-bars");
        hamburg.classList.add("fa-xmark");
        ham_menu.classList.remove("close")
    }else{
        hamburg.classList.remove("fa-xmark");
        hamburg.classList.add("fa-bars");
        ham_menu.classList.add("close");
    }
});

//<i class="fa-solid fa-xmark"></i>