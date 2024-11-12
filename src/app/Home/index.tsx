import { Button } from "@/components/button";
import Graphics from "@/assets/graphics.png";
import Image from "next/image";

export function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-14 pt-12 md:flex-row lg:justify-between">
      <div className="text-center md:text-left">
        <h1 className="mb-10 text-5xl font-bold leading-tight md:text-6xl">
          SaaS Landing <br /> Page Template
        </h1>
        <p className="text-lg text-[#808080]">
          This is a template Figma file, turned into code <br /> using Anima.
          Learn more at AnimaApp.com
        </p>

        <Button title="Get started" variant="secondary" className="mt-12" />
      </div>

      <div className="m-5 rounded-xl bg-[#333333]">
        <Image src={Graphics} alt="graphics" />
      </div>
    </div>
  );
}
