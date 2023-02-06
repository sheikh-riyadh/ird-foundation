import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Healthy from "@/components/Healthy/Healthy";
import LoseFat from "@/components/LoseFat/LoseFat";
import Morning from "@/components/Morning/Morning";
import Program from "@/components/Program/Program";
import Working from "@/components/Working/Working";
/* Vendor files */
import 'flowbite';
import 'swiper/css';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Healthy></Healthy>
      <LoseFat></LoseFat>
      <Morning></Morning>
      <Working></Working>
      <Program></Program>
    </>
  )
}
