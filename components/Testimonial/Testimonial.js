import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function Testimonial() {
    SwiperCore?.use([Autoplay])
    return (
        <div className='mx-5 lg:mx-12 xl:mx-24 my-28'>
            <h1 className='font-bold text-[28px] lg:text-[46px] text-start lg:font-normal leading-normal lg:text-center mb-5'>Testimonials</h1>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000
                }}
            >
                {
                    [1, 2, 3, 4].map((value, index) => {
                        return <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 lg:gap-10 lg:grid-cols-2'>
                                <div className='shadow-lg p-5 lg:p-10 mb-10 lg:mb-16 rounded-xl'>
                                    <q className='italic text-[#7B787C] text-xs lg:text-base'>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</q>

                                    <div>
                                        <div className='flex gap-8 mt-5 lg:mt-10'>
                                            <Image alt='Reviewer_image' className='rounded-xl' src={`/assets/reviewer-${value}.jpg`} width={50} height={50}></Image>

                                            <div>
                                                <h1 className='font-bold mb-1 lg:mb-3 text-[14px] lg:text-base'>
                                                    {
                                                        value > 2 ?
                                                            "Suketi Mantapo"
                                                            :
                                                            "Ada Apose"
                                                    }
                                                </h1>
                                                <p className='text-xs lg:text-base'>Designer Graphic </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow-lg p-5 lg:p-10 mb-10 lg:mb-16 rounded-xl'>
                                    <q className='italic text-[#7B787C] text-xs lg:text-base'>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</q>

                                    <div>
                                        <div className='flex gap-8 mt-5 lg:mt-10'>
                                            <Image alt='Reviewer_image' className='rounded-xl' src={`/assets/reviewer-${value < 4 ? ++value : "3"}.jpg`} width={50} height={50}></Image>

                                            <div>
                                                <h1 className='font-bold mb-1 lg:mb-3 text-[14px] lg:text-base'>
                                                    {
                                                        value > 2 ?
                                                            "Suketi Mantapo"
                                                            :
                                                            "Ada Apose"
                                                    }
                                                </h1>
                                                <p className='text-xs lg:text-base'>Designer Graphic </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}