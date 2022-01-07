let hero = document.querySelector('.hero')

let slider = document.querySelector('.slider')

let slides = slider.querySelectorAll('.slide')

let slide_index = 0

let can_slide_play = true

let hero_bgs = [
    './images/goi-cuon-bg.jpg',
    './images/pho-ga-bg.jpg',
    './images/bun-bo-bg.jpg'
]

showSlide = (index) =>{
    slides.forEach(e => e.classList.remove('active'))
    slides[index].classList.add('active')
    hero.style.backgroundImage = `url(${hero_bgs[index]})`
}

nextSlide = () =>{
    if (slide_index + 1 == slides.length){
        slide_index = 0
    }
    else{
        slide_index += 1
    }
    showSlide(slide_index)
}
// //pause slide when mouse come in slider
// slider.addEventListener('mouseover',()=>can_slide_play = false)
// //resume slide when mouse leave out slider
// slider.addEventListener('mouseleave',()=>can_slide_play = true)

showSlide(slide_index)

//auto play side
// setInterval(()=>{
//     if(!can_slide_play) return
//     nextSlide()
// },1500)

// manual slide select

slider.querySelectorAll('.slider-control-item').forEach((item,index)=>{
    item.addEventListener('click',()=>showSlide(index))
})