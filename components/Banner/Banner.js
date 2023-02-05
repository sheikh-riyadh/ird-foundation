import Image from "next/image"
export default function Banner() {
    return (
        <div>
            <div>
                <h1>Healthy in side fresh out side</h1>
                <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div>
                    <button>Get Started</button>
                    <button>Learn More</button>
                </div>
                <h2>Brands:</h2>
                <div>
                    <Image src={'/assets/brand1.png'} width={30} height={30}></Image>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}