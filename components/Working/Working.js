import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
export default function Working() {
    return (
        <div className="flex mx-5 flex-col-reverse lg:flex-row lg:mx-24 gap-5 justify-center items-center my-16">
            <div>
                <Image alt="Banner_image" className="lg:-ml-20" src={'/assets/works-image3.png'} width={1000} height={800}></Image>
            </div>
            <div>
                <h1 className="text-3xl lg:text-5xl leading-snug">How it works?</h1>
                <div className="flex flex-col">
                    <div className="shadow-2xl rounded-xl p-5 my-3">
                        <h1>The body becomes sick because of rarely exercise</h1>
                    </div>
                    <div className="shadow-2xl rounded-xl p-5 my-3">
                        <h1>Don't give up in order to get a healthy and ideal body</h1>
                    </div>
                    <div className="shadow-2xl rounded-xl p-5 my-3">
                        <h1>Become addicted to the exercise that is given</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}