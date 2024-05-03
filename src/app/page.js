import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#27005D]">
      <div className="containe max-auto px-12 py-4r">
        <HeroSection />
      </div>
    </main>
  );
}
