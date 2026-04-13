import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "./About"; 
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />   
      <Map />
    </>
  );
}