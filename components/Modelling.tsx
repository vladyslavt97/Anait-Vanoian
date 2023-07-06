"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useStore } from "./State";
import ClipLoader from "react-spinners/ClipLoader";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

type Props = {}
interface openState {
    open: false;
}

export default function Modelling({}: Props) {
  const open = useStore((state: openState) => state.open);
  const [imageUrls, setImages] = useState([])

  useEffect(()=>{
    fetch('/api/modelling')
      .then(response => {
          return response.json()
      })
      .then(data => {
          setImages(data.publicUrls)
      })
      .catch(err => {
          console.log('er: ', err);
      });
  },[])
  
  return (
    <>
    {imageUrls.length === 0 ? 
      <div className="flex justify-center items-center">
        <ClipLoader color="#36d7b7" />
        </div>
        :
     <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="z-0"
      >
        {imageUrls.map((url, i)=>(
          <SwiperSlide key={i}>
              <Image width={200} height={200} src={`${url}`} alt="photo" className="mx-auto my-5 w-80 h-80 object-contain" priority={true}/>
          </SwiperSlide>
        ))}
      </Swiper>
      }
    </>
  );
}
