import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaReddit } from "react-icons/fa";
export default function Footer() {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-12 py-16 gap-5 px-5 lg:px-24 dark:bg-[#121212] bg-[#1C3764]">
            <div className="lg:col-span-6">
                <div>
                    <a href="/" className="flex items-center">
                        <span className="self-center text-xl whitespace-nowrap dark:text-[#6765F0] text-[#6765F0] bg-white p-2 rounded-lg">Gym</span>
                        <span className="self-center text-xl whitespace-nowrap dark:text-white text-white ml-1">baran</span>
                    </a>
                </div>
                <p className="my-5 text-[#f8f8f8] text-xs lg:text-base">We take care of your health with <br /> regular and fun exercise</p>
                <div className="flex gap-5">
                    <FaFacebook className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaInstagram className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaLinkedinIn className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaTwitter className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaReddit className="text-4xl text-white bg-[#E275CD] p-2" />
                </div>
            </div>
            <div className="lg:col-span-2">
                <h1 className="font-bold text-white">Program</h1>
                <ul className="text-sm text-[#f8f8f8]">
                    <li className="my-2">Workout</li>
                    <li className="my-2">Gym</li>
                    <li className="my-2">Cardio</li>
                    <li className="my-2">Zumba</li>
                </ul>
            </div>
            <div className="lg:col-span-2">
                <h1 className="font-bold text-white">Blog</h1>
                <ul className="text-sm text-[#f8f8f8]">
                    <li className="my-2">Daily stretch</li>
                    <li className="my-2">Daily workout</li>
                </ul>
            </div>
            <div className="lg:col-span-2">
                <h1 className="font-bold text-white">About Us</h1>
                <ul className="text-sm text-[#f8f8f8]">
                    <li className="my-2">Support</li>
                    <li className="my-2">Contact</li>
                    <li className="my-2">Address</li>
                </ul>
            </div>
        </div>

    )
}