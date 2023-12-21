var t1 = gsap.timeline()
var t2 = gsap.timeline()
var t3 = gsap.timeline()
var t4 = gsap.timeline()
var t5 = gsap.timeline()
t1.from("#logo ",{
    transform:"translateY(-130%)",
    duration:1,
    delay: 10,
});
t1.from(".nav-item",{
    transform:"translateY(-120%)",
    duration:.6,
    stagger: 1,
});

t2.from("#hello",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0
});

t2.from("#hero-heading",{
    transform:"translateY(-120%)",
    duration:1,
    opacity:0
});
t2.from("#bhavya",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0
});
t2.from("#hero-subheading",{
    transform:"translateY(-120%)",
    duration:.3,
    opacity:0,
});
t2.from("#full-stack",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0,
});

t2.from("#person",{
    transform:"scale(1)",
    duration:2,
    opacity:0,
});


t2.from(".social-item",{
    transform:"translateY(-40%)",
    duration:3,
    opacity:0,
    stagger:.2
});

t1.from("#sd",{
    transform:"translateY(-100%) rotate(90deg)",
    duration:7,
    opacity:0,
});


t4.from("#about-h",{
    transform:"translateY(-150px)",
    opacity:0,
    scrollTrigger:{
        triggier:"#about-h",
        scroller:"body",
        scrub:5,
        start:"top 0",
        end:"top -100%",
        // markers:true,
    }
})

t4.from("#hero-subheading-a",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        triggier:"#hero-subheading-a",
        scroller:"body",
        scrub:5,
        start:"top 0",
        end:"top -100%",
        // markers:true,
    }
})
t4.from("#person-a",{
    transform:"scale(1)",
    duration:4,
    opacity:0,
    scrollTrigger:{
        triggier:"#person-a",
        scroller:"body",
        scrub:5,
        start:"top 0",
        end:"top -100%",
    }
});

t5.from("#my-skill",{
    transform:"translateY(-140px)",
    duration:3,
    opacity:0,
    scrollTrigger:{
        triggier:"#my-skill",
        scroller:"body",
        scrub:5,
        start:"top 0",
        end:"top -200%",
    }
});
t5.from(".my-skill",{
    transform:"translateX(-20px) ",
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        triggier:".my-skill",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
    }
});