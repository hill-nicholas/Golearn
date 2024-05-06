let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll(".slider .list .items");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0 ;

prev.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();

}

next.onclick = function (){
    active = active - 1 >=0 ? active - 1 : lengthItems;
    reloadSlider();
    
}

let refreshInterval = setInterval(()=>{
    prev.click()
},3000);

console.log(items)

function reloadSlider(){
   let checkLeft =  items[active].offsetLeft;
   console.log(checkLeft)
   slider.style.left = -checkLeft + "px";
    
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {prev.click()},3000)
}

dots.forEach((li,key) => {
    li.addEventListener("click",()=>{
        active = key ;
        reloadSlider();
    })
})

