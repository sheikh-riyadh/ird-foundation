import { motion } from "framer-motion"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function Healthy() {
    return (
        <div className="mx-5 lg:mx-12 xl:mx-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 my-24">
                <div>
                    <h2 className="font-bold text-[28px] lg:text-[46px] text-start lg:font-normal leading-normal">Healthy in side <br /> fresh out side</h2>
                </div>
                <div>
                    <p className="text-[#7B787C] text-xs lg:text-base tracking-wider">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
                </div>
            </div>

            <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-20 rounded-3xl bg-gradient-to-r from-[#6462F0] to-[#9190E9] py-8 px-8 lg:py-14 xl:py-20 lg:px-14 xl:px-20"

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
                <div className="flex gap-5 items-center">
                    <motion.div className="bg-[#9291F1] p-4 rounded-xl w-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        variants={
                            {
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }
                        }
                    >
                        <Image src={'/assets/healthy-logo1.png'} width={30} height={30} alt="Healthy_image"></Image>
                    </motion.div>
                    <div>
                        <p className="font-bold text-base lg:text-xl mb-2 text-white ">Get that 11 line<br /> in 30 days</p>
                        <button type="button" className="text-white text-center inline-flex items-center">
                            Learn more
                            <FaArrowRight className="ml-3"></FaArrowRight>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <motion.div className="bg-[#9291F1] p-4 rounded-xl w-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        variants={
                            {
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }
                        }
                    >
                        <Image src={'/assets/healthy-logo2.png'} width={30} height={30} alt="Healthy_image"></Image>
                    </motion.div>
                    <div>
                        <p className="font-bold text-base lg:text-xl mb-2 text-white">14 Days <br />sherd challenge</p>
                        <button type="button" className="text-base text-white text-center inline-flex items-center">
                            Learn more
                            <FaArrowRight className="ml-3"></FaArrowRight>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <motion.div className="bg-[#9291F1] p-4 rounded-xl w-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        variants={
                            {
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }
                        }
                    >
                        <Image src={'/assets/healthy-logo3.png'} width={30} height={30} alt="Healthy_image"></Image>
                    </motion.div>
                    <div>
                        <p className="font-bold text-base lg:text-xl mb-2 text-white">Get flat belly <br /> in 30 days</p>
                        <button type="button" className="text-white text-center inline-flex items-center">
                            Learn more
                            <FaArrowRight className="ml-3"></FaArrowRight>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}