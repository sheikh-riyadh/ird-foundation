import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
import { motion } from "framer-motion";
export default function Morning() {
    return (
        <div className="flex flex-col lg:flex-row mx-5 lg:mx-12 xl:mx-24 gap-10 justify-center items-center my-16">
            <div>
                <h1 className="font-bold text-[28px] lg:text-[46px] text-start lg:font-normal leading-normal">Daily morning <br /> workout in home</h1>
                <p className="my-6 text-[#7B787C] text-xs lg:text-base tracking-wider leading-normal">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="w-6/12 lg:w-4/12 grid gap-5 mb-16">
                    <motion.div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-[#264373] rounded-lg shadow-2xl"
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
                        <button type="button" className="text-white font-medium text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">
                            Get Started
                        </button>
                        <FaArrowRight className="text-white justify-end lg:ml-5 text-base" />
                    </motion.div>

                </div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .5 }}
                variants={
                    {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }
                }
            >
                <Image alt="Banner_image" className="-mr-12" src={'/assets/morning-image1.png'} width={1200} height={600}></Image>
            </motion.div>
        </div>
    )
}