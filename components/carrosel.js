import React from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image";
import carrosel1 from "../public/img/carrosel/carrosel1.jpg";
import carrosel2 from "../public/img/carrosel/carrosel2.jpg";
import carrosel3 from "../public/img/carrosel/carrosel3.jpg";
import carrosel4 from "../public/img/carrosel/carrosel4.jpg";

export default () => {

  const imagensCarrosel = [
    carrosel1,
    carrosel2,
    carrosel3,
    carrosel4,
  ]

  const [sliderRef] = useKeenSlider({
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
    <div style={{width:"100%"}}>
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
    
  )
}