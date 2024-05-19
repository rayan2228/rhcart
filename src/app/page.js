import Image from "next/image";
import Header from "./components/layouts/header";
import Navbar from "./components/layouts/Navbar";
import Banner from "./components/Banner";
import Features from "./components/features";
import Categories from "./components/Categories";
import NewArrival from "./components/NewArrival";
import Ads from "./components/Ads";
import TreadingProduct from "./components/TreadingProduct";
import Footer from "./components/layouts/Footer";
import Copyright from "./components/layouts/Copyright";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      <TreadingProduct />
      <Footer />
      <Copyright />
    </>
  );
}
