import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaReddit } from "react-icons/fa";
export default function Footer() {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-4 py-16 gap-5 px-5 lg:px-24 bg-[#1C3764]">
            <div>
                <div>
                    <a href="https://flowbite.com/" className="flex items-center">
                        <span className="self-center text-xl whitespace-nowrap dark:text-white text-[#6765F0] bg-white p-2 rounded-lg">Gym</span>
                        <span className="self-center text-xl whitespace-nowrap dark:text-white text-white ml-1">baran</span>
                    </a>
                </div>
                <p className="my-5">We take care of your health with regular and fun exercise</p>
                <div className="flex gap-5">
                    <FaFacebook className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaInstagram className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaLinkedinIn className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaTwitter className="text-4xl text-white bg-[#E275CD] p-2" />
                    <FaReddit className="text-4xl text-white bg-[#E275CD] p-2" />
                </div>
            </div>
            <div className="lg:text-end">
                <h1 className="font-bold text-white">Program</h1>
                <ul className="">
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                </ul>
            </div>
            <div className="lg:text-end">
                <h1 className="font-bold text-white">Blog</h1>
                <ul className="">
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                </ul>
            </div>
            <div className="lg:text-end">
                <h1 className="font-bold text-white">About</h1>
                <ul className="">
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                    <li>Workout</li>
                </ul>
            </div>
        </div>

    )
}