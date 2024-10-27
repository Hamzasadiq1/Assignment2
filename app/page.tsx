import Image from "next/image";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
   <div>
    <h1>Home page</h1>
    <NavBar/>
    <Hero/>
    <Footer/>
   </div>
  );
}
