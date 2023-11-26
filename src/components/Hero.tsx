"use client";
import { Card, CardContent } from "@/components/ui/card";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SusuBanner from "../../public/carousel/susu banner.png";
import Chatime from "../../public/carousel/chatime.jpg";
import Promaag from "../../public/carousel/promaag.png";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 text-black flex items-center justify-center";

  return (
    <div className="relative mb-5">
      <Swiper
        navigation={{
          nextEl: ".next-nav-button",
          prevEl: ".prev-nav-button",
          disabledClass: "opacity-50",
        }}
        modules={[Navigation]}
        className=""
      >
        <SwiperSlide>
          <Card className="relative w-full overflow-hidden">
            <CardContent className="relative aspect-[2.8/1] w-full">
              <Image
                src={SusuBanner}
                alt="Banner susu formula"
                fill
                className="w-full h-full object-contain"
              />
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="relative w-full overflow-hidden">
            <CardContent className="relative aspect-[2.8/1] w-full">
              <Image
                src={Chatime}
                alt="Banner minuman chatime"
                fill
                className="w-full h-full object-contain"
              />
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="relative w-full overflow-hidden">
            <CardContent className="relative aspect-[2.8/1] w-full">
              <Image
                src={Promaag}
                alt="Banner obat lambung promaag"
                fill
                className="w-full h-full object-contain"
              />
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
      <div className="hidden absolute z-10 bottom-[10%] md:flex w-full justify-center">
        <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
          <button
            aria-label="Previous product image"
            className={`${buttonClassName} prev-nav-button`}
          >
            <ArrowLeftIcon className="h-5" />
          </button>
          <div className="mx-1 h-6 w-px bg-neutral-500"></div>
          <button
            aria-label="Next product image"
            className={`${buttonClassName} next-nav-button`}
          >
            <ArrowRightIcon className="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
