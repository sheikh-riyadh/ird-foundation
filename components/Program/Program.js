import Image from "next/image"
export default function Program() {
    return (
        <div>
            <h1 className="text-3xl lg:text-5xl text-start lg:text-center mx-5 lg:mx-24 my-16">Programs that can <br /> be taken</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 gap-8 lg:gap-14">
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#6462F0] to-[#9190E9] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-1.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-2.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-3.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-4.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#6462F0] to-[#9190E9] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-5.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <div className="p-5 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] w-3/12 rounded-full">
                        <Image src={`/assets/program-logo-6.png`} width={50} height={50}></Image>
                    </div>
                    <div>
                        <h2 className="font-bold">Gets ABS in 2 weeks</h2>
                        <p className="text-[#7B787C]">Exercise is a very important need for our body. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}