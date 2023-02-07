import { motion } from "framer-motion"
import Image from "next/image"
export default function Program() {
    return (
        <div className="mx-5 lg:mx-24 my-16">
            <h1 className="font-bold text-[28px] lg:text-[46px] text-start lg:font-normal leading-normal lg:text-center my-12">Programs that can <br /> be taken</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 gap-8 lg:gap-14">
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#6462F0] to-[#9190E9] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-1.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-2.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">25 Mins full body workout</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-3.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">10 Mins toned arms workout</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-4.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">15 Mins full body fat burn</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#6462F0] to-[#9190E9] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-5.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">25 Mins HIIT workout</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
                <motion.div className="flex justify-center items-center gap-5 "
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
                    <div className="p-5 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] w-3/12 rounded-full">
                        <Image alt="Logo" src={`/assets/program-logo-6.png`} width={70} height={70}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold text-base">Intense lower Abs workout</h2>
                        <p className="text-[#7B787C] text-[14px] lg:text-base">Exercise is a very important need for our body. </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}