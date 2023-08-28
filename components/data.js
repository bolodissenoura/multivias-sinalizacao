import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

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
  title: "Lorem, ipsum dolor sit",
  desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Lorem, ipsum dolor sit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
