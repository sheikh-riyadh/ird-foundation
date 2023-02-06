import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
export default function LoseFat() {
    return (

        <div className="flex mx-5 flex-col-reverse lg:flex-row lg:mx-24 gap-10 justify-center items-center my-24">
            <div>
                <Image alt="Banner_image" src={'/assets/lose-fat-image.png'} width={1200} height={600}></Image>
            </div>
            <div>
                <h1 className="text-3xl lg:text-5xl leading-snug">Best full body <br /> workout to lose fat</h1>
                <p className="my-6 text-[#7B787C] text-xs lg:text-base tracking-wider leading-tight">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="w-6/12 lg:w-4/12 grid gap-5 mb-16">
                    <div className="flex justify-between items-center py-3 px-5 lg:py-4 lg:px-6 bg-[#264373] rounded-lg shadow-2xl">
                        <button type="button" className="text-white font-medium text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700">
                            Get Started
                        </button>
                        <FaArrowRight className="text-white justify-end lg:ml-5 text-base" />
                    </div>

                </div>
            </div>
        </div>
    )
}