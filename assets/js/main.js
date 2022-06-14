if (window.innerWidth > 992) {
  document.getElementById('carouselIndicatorsOne').dataset.bsInterval = false
  document.getElementById('carouselIndicatorsTwo').dataset.bsInterval = false
}


let items = document.querySelectorAll('.testimonial .carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})