import Image from "next/image"
import { FaAngleRight } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

export default function Banner() {
    SwiperCore?.use([Autoplay])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen  px-5 lg:px-20 justify-center items-center bg-gradient-to-r from-[#f5e6ff] to-white">
            <div className="my-16">
                <h1 className="text-3xl lg:text-6xl">Healthy in side <span className="text-[#6765F0] font-bold">fresh</span> out side</h1>
                <p className="my-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="lg:w-8/12 grid gap-5 grid-cols-2 mb-16">
                    <div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-[#264373] rounded-lg">
                        <button type="button" className="text-white font-medium text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">
                            Get Started
                            <FaAngleRight className="bg-white text-black ml-2 lg:ml-5 text-xl p-1 rounded-full
                            " />
                        </button>

                    </div>
                    <div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-white rounded-lg shadow-2xl">
                        <button type="button" className="text-black font-medium text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">

                            <BsFillPlayFill className="text-white bg-[#264373] mr-2 lg:mr-3 text-xl p-1 rounded-full
                            " />
                            Learn More
                        </button>

                    </div>
                </div>
                <h2 className="mb-5">Brands:</h2>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}
                >
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>
                    <SwiperSlide>{Slider()}</SwiperSlide>

                </Swiper>
            </div>
            <div>
                <Image alt="Banner_image" src={'/assets/hero-trainer.png'} width={600} height={600}></Image>
            </div>
        </div>
    )
}

function Slider() {
    return (
        <div className="lg:w-8/12 grid grid-cols-4 gap-5 justify-center items-center">
            <Image alt="Brand_image" src={'/assets/brand1.png'} width={70} height={50}></Image>
            <Image alt="Brand_image" src={'/assets/brand2.png'} width={50} height={50}></Image>
            <Image alt="Brand_image" src={'/assets/brand3.png'} width={70} height={50}></Image>
            <Image alt="Brand_image" src={'/assets/brand4.png'} width={90} height={50}></Image>
        </div>
    )
}