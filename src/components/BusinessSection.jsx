"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import cute1 from "../assets/images/cute/1.jpg";
import cute2 from "../assets/images/cute/2.jpg";
import cute3 from "../assets/images/cute/3.jpg";
import cute4 from "../assets/images/cute/4.jpg";
const cards = [
  {
    title: "Cute 1",
    img: cute1,
  },
  {
    title: "Cute 2",
    img: cute2,
  },
  {
    title: "Cute 3",
    img: cute3,
  },
  {
    title: "Cute 4",
    img: cute4,
  }
];

export default function BusinessSection() {
  return (
    <section className="w-full bg-gray-200 py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center p-6 bg-gray-50 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold tracking-wide">
            <span className="text-blue-600">SPIRIT</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Forget MBAs—these little bosses run on cookies, cartoons, and
            unstoppable charm. Warning: extreme levels of cuteness ahead!
          </p>
          <p className="mt-6 text-gray-400 text-sm flex items-center gap-2">
            <span className="text-xl">🖱</span> SLIDE TO EXPLORE
          </p>
        </div>

        {/* RIGHT: Swiper chiếm 2 cột */}
        <div className="lg:col-span-2">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="group h-full flex flex-col justify-between border rounded-2xl shadow-md bg-white hover:bg-red-600 hover:text-white transition-colors duration-500 p-8">
                  <div>
                    <h3 className="text-2xl font-bold uppercase">
                      {card.title}
                    </h3>
                  </div>

                  {card.img && (
                    <img
                      src={card.img}
                      alt={card.title}
                      className="mt-6 w-full rounded-xl object-cover"
                    />
                  )}

                  <button className="mt-6 flex items-center gap-2 font-semibold">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
