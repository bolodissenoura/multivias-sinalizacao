import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="">
        <ScrollAnimationWrapper>
          <motion.div
            variants={scrollAnimation}
            className="flex flex-col justify-center items-center w-full mt-28">
            <div className="flex flex-col justify-center items-center max-w-2xl">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Multivias Sinalização.
              </h1>
              <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 text-center">
                Somos o caminho certo para deixar sua rodovia mais segura.
              </p>
              <div className="flex flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  href="#solucoes"
                  rel="noopener"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-600 rounded-md ">
                  Nossos serviços
                </a>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="flex flex-col justify-center dark:bg-neutral-800 p-8 mt-48">
              <div className="text-xl text-center text-gray-700 dark:text-white">
                As <span className="text-orange-600">grandes</span> estradas
                confiam em nós.
              </div>
              <div className="text-xl text-center text-gray-700 dark:text-white">
                Confira quem está com Multivias
              </div>
              <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
                <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
                  <Image
                    src="/img/brands/tamoios.png"
                    alt="N"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
                  <Image
                    src="/img/brands/eixo-sp.png"
                    alt="N"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
                  <Image
                    src="/img/brands/dpbarros.png"
                    alt="N"
                    width="120"
                    height="120"
                  />
                </div>
                <div className="flex items-center pt-2 text-gray-400 dark:text-gray-400">
                  <Image
                    src="/img/brands/hidropav.png"
                    alt="N"
                    width="120"
                    height="120"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default Hero;
