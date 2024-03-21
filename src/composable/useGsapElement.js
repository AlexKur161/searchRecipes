import gsap from "gsap";

export function useGsapElement() {
    const up = () => {
        gsap.fromTo(".up",
            {
                
                y: -150,
                opacity: 0,
            },
            {
                duration: 3,
                y: 0,
                opacity: 1,
            },
        )
    }

    const showEl = () => {
        gsap.fromTo(".showel",
            {
                opacity: 0,
            },
            {
                duration: 4,
                opacity: 1,
            },
        )
    }

    const cardAnimation = () => {
        gsap.fromTo(".card_animation",
            {
                opacity: 1,
                ClipPath: "polygon(0% 8%, 0% 7%, 0% 99%, 0% 0%)",
                autoAlpha: 0,
            },
            {
                opacity: 1,
                ClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                autoAlpha: 1,
                duration: 2,
                ease: 'none'
            },
        )
    }
    return { up, showEl, cardAnimation }
}