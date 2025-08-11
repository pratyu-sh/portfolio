import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import Recentprojects from "./components/recentprojects";
import { navItems } from "./data";
import Clients from "./components/clients";
import Experience from "./components/Experience";
// import Approach from "./components/Approach";
import { Approach}  from "./components/Approach";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <>
  
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-10 ">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Grid/>
    <Recentprojects/>   
    <Clients/>
    <Experience/>
    {/* <Approach/> */}
    <Approach/>
    <Footer/>
    </main>
  
    </>
  );
}
