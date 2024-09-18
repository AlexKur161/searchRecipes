import gsap from "gsap";

export function useGsapElement() {
  const up = () => {
    gsap.fromTo(
      ".up",
      {
        y: -150,
        opacity: 0,
      },
      {
        duration: 3,
        y: 0,
        opacity: 1,
      }
    );
  };

  const showEl = () => {
    gsap.fromTo(
      ".showel",
      {
        opacity: 0,
      },
      {
        duration: 4,
        opacity: 1,
      }
    );
  };

  const cardAnimation = () => {
    gsap.fromTo(
      ".animation-country .card_animation",
      {
        opacity: 1,
        transform: "scale(0,0)",
        autoAlpha: 0,
      },
      {
        opacity: 1,
        transform: "scale(1,1)",
        autoAlpha: 1,
        duration: 0.7,
        ease: "none",
      }
    );
  };
  return { up, showEl, cardAnimation };
}
