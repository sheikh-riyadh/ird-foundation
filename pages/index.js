import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Healthy from "@/components/Healthy/Healthy";
import LoseFat from "@/components/LoseFat/LoseFat";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Healthy></Healthy>
      <LoseFat></LoseFat>
    </>
  )
}
