var loader= document.querySelector(".loader");
var vidcon= document.querySelector(".videosection");

vidcon.addEventListener("mouseenter", function(){
    gsap.to(loader, {
        opacity:1,
        scale:1
    })
})

vidcon.addEventListener("mouseleave", function(){
    gsap.to(loader, {
        opacity:0,
        scale:0
    })
})

vidcon.addEventListener("mousemove", function(details){
   gsap.to(loader, {
    left: details.x,
    top: details.y
   })

})

var sect3= document.querySelector(".section3");
var sec3= document.querySelectorAll(".sec3")

// sect3.addEventListener("mouseenter", function(){
//     gsap.to(sec3, {
//         transform: scale(1.5),
//         width: 45,
//         height: 70
//        })
// })
var mobnav=document.querySelector(".mob-nav");
var threebars= document.querySelector(".threebars");
var cross= document.querySelector(".cross");

    threebars.addEventListener("click", ()=>{
        mobnav.style.display='block';
    
})

cross.addEventListener("click", ()=>{
    mobnav.style.display='none';

})