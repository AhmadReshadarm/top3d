

const homeBtnMobile = document.querySelector(".home_mobile_btn");
const menuBtnMobile = document.querySelector(".menu_mobile_btn");
const section6 = document.querySelector(".section_6");
const combinedSections = document.querySelectorAll(".section_2, .section_3, .section_4")
const slide = document.querySelector(".slider_wrapper");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");



// Mobile menu toggler
homeBtnMobile.addEventListener("click", ()=>{
    section6.style.transform = "translateX(325px)";
    setTimeout(()=>{
        section6.classList.add("displayNone");
    },500)
     for(let i = 0; i < combinedSections.length; i++){
        combinedSections[i].classList.remove("displayNone");
        
         }
    setTimeout(()=>{
    for(let i = 0; i < combinedSections.length; i++){
        combinedSections[i].style.marginLeft = "0px";
         } 
    },10)


    if(!homeBtnMobile.classList.contains("active_page")){
    homeBtnMobile.classList.add("active_page");
    homeBtnMobile.classList.remove("not_active_page");
    menuBtnMobile.classList.remove("active_page");
    menuBtnMobile.classList.add("not_active_page");
    }

});

menuBtnMobile.addEventListener("click", ()=>{
    section6.classList.remove("displayNone");
    setTimeout(()=>{
    section6.style.transform = "translateX(0px)";
    },10)
    
    for(let i = 0; i < combinedSections.length; i++){
        combinedSections[i].style.marginLeft = "-625px";
    }

    setTimeout(()=>{
    for(let i = 0; i < combinedSections.length; i++){
        combinedSections[i].classList.add("displayNone");
         } 
    },500)
    
    if(!menuBtnMobile.classList.contains("active_page")){
    menuBtnMobile.classList.add("active_page");
    menuBtnMobile.classList.remove("not_active_page");
    homeBtnMobile.classList.remove("active_page");
    homeBtnMobile.classList.add("not_active_page");
    }

});



// Slider bottons controller

let slideTo = 0;

// mobile steps
if(window.innerWidth < 350){
  next.addEventListener("click", ()=>{
    if(slideTo === 0 || slideTo < 1000){
        slideTo += 150;
        slide.scrollTo(slideTo, 0);  
    }
})

prev.addEventListener("click", ()=>{
    if(slideTo > 0){
        slideTo -= 150;
        slide.scrollTo(slideTo,0);
    }
})
}
// PC steps
else{
next.addEventListener("click", ()=>{

    if(slideTo === 0 || slideTo < 1400){
        slideTo += 300;
        slide.scrollTo(slideTo, 0);
    }
})
prev.addEventListener("click", ()=>{
    if(slideTo > 0){
        slideTo -= 300;
        slide.scrollTo(slideTo,0);
    }
});

}
