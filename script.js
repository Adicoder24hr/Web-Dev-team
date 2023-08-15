var tl = gsap.timeline()


tl.from(".navbar img , .navbar .nav-links .l1 , .navbar .nav-links .l2,.navbar .nav-links .l3,.navbar .nav-links .l4" , {
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.1
})

tl.from(".gdsc-text .gdsch1 , .gdsc-text p , .gdsc-text .hero-btn", {
y:100,
    duration:1,
    // delay:0.5,
    opacity:0,
    stagger:0.1
})