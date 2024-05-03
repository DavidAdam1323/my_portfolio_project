import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#27005D]">
      <Navbar />
      <div className="containe max-auto px-12 py-4r">
        <HeroSection />
      </div>
    </main>
  );
}
