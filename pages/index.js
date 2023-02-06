import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Healthy from "@/components/Healthy/Healthy";
import LoseFat from "@/components/LoseFat/LoseFat";
import Morning from "@/components/Morning/Morning";
import Program from "@/components/Program/Program";
import Testimonial from "@/components/Testimonial/Testimonial";
import Working from "@/components/Working/Working";
/* Vendor files */
import 'flowbite';
import 'swiper/css';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Healthy />
      <LoseFat />
      <Morning />
      <Working />
      <Program />
      <Testimonial />
      <Footer />
    </>
  )
}
