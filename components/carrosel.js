import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import carrosel1 from "../public/img/carrosel/carrosel1.png";
import carrosel2 from "../public/img/carrosel/carrosel2.png";
import carrosel3 from "../public/img/carrosel/carrosel3.png";
import carrosel4 from "../public/img/carrosel/carrosel4.png";
import carrosel5 from "../public/img/carrosel/carrosel5.png";
import carrosel6 from "../public/img/carrosel/carrosel6.png";
import carrosel7 from "../public/img/carrosel/carrosel7.png";
import carrosel8 from "../public/img/carrosel/carrosel8.png";

export default () => {
  const imagensCarrosel = [
    carrosel1,
    carrosel2,
    carrosel3,
    carrosel4,
    carrosel5,
    carrosel6,
    carrosel7,
    carrosel8,
  ];
  const animation = { duration: 100000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "free",
    slides: { perView: 3 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 2,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 800px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div style={{ width: "100%" }}>
      <div ref={sliderRef} className="keen-slider">
        {imagensCarrosel.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`carrosel-foto-${index + 1}`}
            className="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  );
};
