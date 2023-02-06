import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function Testimonial() {
    SwiperCore?.use([Autoplay])
    return (
        <div className='mx-5 lg:mx-24 my-28'>
            <h1 className='text-center text-3xl lg:text-5xl'>Testimonials</h1>
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
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='shadow-lg p-10 m-5 lg:mb-16 rounded-xl'>
                                    <q className='italic text-[#7B787C]'>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</q>

                                    <div>
                                        <div className='flex gap-8 mt-10'>
                                            <Image alt='Reviewer_image' className='rounded-xl' src={`/assets/reviewer-${value}.jpg`} width={50} height={50}></Image>

                                            <div>
                                                <h1 className='font-bold mb-3'>
                                                    {
                                                        value > 2 ?
                                                            "Suketi Mantapo"
                                                            :
                                                            "Ada Apose"
                                                    }
                                                </h1>
                                                <p>Designer Graphic </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shadow-lg p-10 m-5 lg:mb-16 rounded-xl'>
                                    <q className='italic text-[#7B787C]'>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</q>

                                    <div>
                                        <div className='flex gap-8 mt-10'>
                                            <Image alt='Reviewer_image' className='rounded-xl' src={`/assets/reviewer-${value < 4 ? ++value : "3"}.jpg`} width={50} height={50}></Image>

                                            <div>
                                                <h1 className='font-bold mb-3'>
                                                    {
                                                        value > 2 ?
                                                            "Suketi Mantapo"
                                                            :
                                                            "Ada Apose"
                                                    }
                                                </h1>
                                                <p>Designer Graphic </p>
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