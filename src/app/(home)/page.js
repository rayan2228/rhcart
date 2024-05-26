import Ads from "@/components/Ads";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import NewArrival from "@/components/NewArrival";
import TreadingProduct from "@/components/TreadingProduct";

export default function Home() {
    return (
       <>
        <Banner/>
        <Features/>
        <Categories/>
        <NewArrival/>
        <Ads/>
        <TreadingProduct/>
       </>
    )
}