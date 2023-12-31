import {
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  AtSymbolIcon,
  MapPinIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/placageral2.png";
import benefitTwoImg from "../public/img/placageral3.svg";

const benefitOne = {
  title: "Serviços Oferecidos",
  desc: "Transformando ideias em realidade: nossos diversificados serviços para atender às suas necessidades.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pintura Mecânica",
      desc: "Renove a aparência de veículos com nosso serviço de pintura mecânica. Utilizamos técnicas avançadas e materiais de alta qualidade para garantir que seu veículo fique com um acabamento impecável. ",
      icon: <PaintBrushIcon />,
    },
    {
      title: "Pintura Manual",
      desc: "Transforme fachadas e estruturas com nosso serviço especializado de pintura vertical. Nossa equipe treinada realiza pinturas de alta qualidade em áreas de difícil acesso, proporcionando uma renovação visual impressionante.",
      icon: <PaintBrushIcon />,
    },
    {
      title: "Pintura Manual",
      desc: "Melhore a segurança viária com nossos serviços de finalização vertical. Nossa equipe especializada implanta placas de sinalização de forma precisa e eficiente, contribuindo para uma condução mais segura nas rodovias.",
      icon: <PaintBrushIcon />,
    },
    {
      title: "Implantação de Tachas",
      desc: "Otimize seu empreendimento com nosso serviço de implantação de tachas. Oferecemos soluções personalizadas para garantir a eficiência na gestão tributária, ajudando você a economizar tempo e recursos.",
      icon: <ChatBubbleBottomCenterIcon />,
    },
    {
      title: "Sinalização Vertical (Implantação de Placas)",
      desc: "Melhore a segurança viária com nossos serviços de sinalização vertical. Nossa equipe especializada implanta placas de sinalização de forma precisa e eficiente, contribuindo para uma condução mais segura nas rodovias.",
      icon: <ChatBubbleBottomCenterIcon />,
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

export { benefitOne, benefitTwo };
