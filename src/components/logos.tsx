import Image from "next/image";
import Logo from "@/assets/logos.png";

export function Logos() {
  return (
    <div>
      <Image src={Logo} alt="logos" />
    </div>
  );
}
