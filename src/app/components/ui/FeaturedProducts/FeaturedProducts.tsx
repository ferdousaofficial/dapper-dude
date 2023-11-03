"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { featuredProducts } from "@/config/data/featureProducts";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";

const FeaturedProducts: React.FC = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px) ");
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  const slidesPerView = isExtraLargeDevice
    ? 4
    : isLargeDevice
    ? 3
    : isMediumDevice
    ? 2
    : 1;

  return (
    <div className="max-w-[1800px] mx-auto lg:py-0 py-20">
      <SectionTitle title="Take a look at our featured products" />
      <div className="py-10 px-5">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          loop={true}
          speed={1000}
        >
          {featuredProducts.map((e) => (
            <div key={e.id}>
              <SwiperSlide>
                <Link href={e.link}>
                  <Image
                    src={e.img}
                    width={445}
                    height={445}
                    alt={e.name}
                    loading="lazy"
                    className="md:mx-0 mx-auto"
                  />

                  <h3 className="font-nunito py-3 xl:text-[25px] lg:text-[22px] text-[25px] text-black md:text-left text-center">
                    {e.name}
                  </h3>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
