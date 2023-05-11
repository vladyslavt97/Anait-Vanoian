"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {}

export default function Gallery({}: Props) {
  return (
    <>
     <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="z-0"
      >
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/1.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/2.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/4.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/3.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/5.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image width={200} height={200} src="/gallery/6.jpg" alt="" className="mx-auto my-5" priority={true}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
