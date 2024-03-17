import Coronavirus from "@/components/Coronavirus";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Prevernt from "@/components/Prevernt";
import Protect from "@/components/Protect";
import Symtoms from "@/components/Symtoms";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <Coronavirus />
      <Prevernt />
      <Protect />
      <Symtoms />
      <News />
    </div>
  );
}
