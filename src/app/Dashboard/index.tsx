import Image from "next/image";
import dashboard from "@/assets/dashboard.png";

export function Dashboard() {
  return (
    <div className="h-[500px] bg-[#FDF5DF]">
      <Image src={dashboard} alt="dashboard" />
    </div>
  );
}
