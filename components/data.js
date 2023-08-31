import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/placageral.png";
import benefitTwoImg from "../public/img/qaEngennier.svg";

const benefitOne = {
  title: "Lorem, ipsum dolor sit",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur provident similique, esse dicta illo, in asperiores atque fugiat quia eius. Voluptatibus libero quibusdam dolorem .",
  image: benefitOneImg,
  bullets: [
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur provident similique, esse dicta illo, in asperiores atque fugiat quia eius. Voluptatibus libero quibusdam dolorem ",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Contato",
  desc: "Descubra um novo mundo de possibilidades através dos nossos serviços! Estamos aqui para transformar suas necessidades em resultados incríveis. Junte-se a nós hoje e leve sua experiência para o próximo nível",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Telefone Celular",
      desc: "55+ (12) 99999-9999",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Email",
      desc: "Email@Email.com.br",
      icon: <AtSymbolIcon />,
    },
    {
      title: "Localização",
      desc: "Rua Fulador cilano de beutrano",
      icon: <MapPinIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
