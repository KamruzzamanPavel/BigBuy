import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, Parallax } from "swiper/modules";
import { data } from "./data";
import Overlay from "./Overlay";
import { Link } from "react-scroll";

const Slider = () => {
  return (
    <section className="w-full h-[75vh] bg-gray-900 mt-2">
      <Swiper
        parallax={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <img
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-white space-y-5 flex flex-col items-center justify-center text-center">
                <h1
                  data-swiper-parallax="-300%"
                  className="md:text-8xl text-4xl font-semibold text-gray-200 sm:text-5xl"
                >
                  {item.headline}
                </h1>
                <p
                  data-swiper-parallax="-500%"
                  className="md:text-xl text-lg text-white sm:text-base"
                >
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-600%">
                  <Link
                    to="categories"
                    offset={50}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <button className="border p-3 bg-white text-black md:text-lg text-sm hover:bg-teal-600 hover:border-none hover:text-white transition ease-out duration-500 ">
                      {item.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
