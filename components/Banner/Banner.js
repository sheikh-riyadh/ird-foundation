import Image from "next/image"
import { FaAngleRight } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from "framer-motion";


export default function Banner() {
    SwiperCore?.use([Autoplay])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen px-5 lg:px-12 xl:px-24 justify-center items-center">
            <div className="my-12">
                <h1 className="text-[28px] lg:text-[56px] font-bold leading-tight">Healthy in side <span className="text-[#6765F0]">fresh</span> out side</h1>
                <p className="my-6 text-[#7B787C] text-xs lg:text-base tracking-wider leading-normal">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <motion.div className="lg:w-10/12 xl:w-8/12 grid gap-5 grid-cols-2 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .5 }}
                    variants={
                        {
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }
                    }
                >
                    <div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-[#264373] rounded-lg shadow-2xl">
                        <button type="button" className="text-white font-medium text-sm text-center inline-flex items-center">
                            Get Started
                            <FaAngleRight className="bg-white text-black ml-2 lg:ml-5 text-xl p-1 rounded-full
                            " />
                        </button>

                    </div>
                    <div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-white rounded-lg shadow-2xl">
                        <button type="button" className="text-black font-medium text-sm text-center inline-flex items-center">

                            <BsFillPlayFill className="text-white bg-[#264373] mr-2 lg:mr-3 text-xl p-1 rounded-full
                            " />
                            Learn More
                        </button>

                    </div>
                </motion.div>
                <h2 className="mb-5 font-bold">Brands:</h2>
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
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .5 }}
                variants={
                    {
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }
                }
            >
                <Image alt="Banner_image" src={'/assets/hero-trainer.png'} width={800} height={600}></Image>
            </motion.div>
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