import Image from "next/image";
import Hero from "@/components/hero";
import Work_management from "@/components/work_management";
import Your_work from "@/components/your_work";
import Our_sponsors from "@/components/Our_sponsors";
import Customize_section from "@/components/customize_section";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Work_management/>
      <Customize_section/>
      <Your_work/>
      <Our_sponsors/>
    </div>
  );
}
