//Next
import Image from "next/image";

//Icons
import { IconMoon, IconSun } from "@tabler/icons-react";

//Interface
interface HeaderProps {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ lightMode, setLightMode }: HeaderProps) => {
  return (
    <header
      className={`flex flex-row items-center shadow-md justify-between py-[1%] px-[10%] ${
        lightMode ? "bg-[#0B111C]" : "bg-white"
      } fixed top-0 w-full z-10`}
    >
      <Image
        src={`/img/agency.ai${lightMode ? "_white" : ""}_logo.svg`}
        alt="Agency Logo"
        width={1000}
        height={1000}
        className="w-[15%] cursor-pointer"
      />
      <ul className={`flex flex-row gap-4 ${lightMode ? "text-white" : ""}`}>
        <li className="cursor-pointer hover:border-b">Home</li>
        <li className="cursor-pointer hover:border-b">Services</li>
        <li className="cursor-pointer hover:border-b">Our Work</li>
        <li className="cursor-pointer hover:border-b">Contact Us</li>
      </ul>
      <div className="flex flex-row items-center gap-4">
        {lightMode === false ? (
          <IconMoon
            stroke={2}
            size={40}
            className="border rounded-full p-2 cursor-pointer"
            onClick={() => setLightMode(!lightMode)}
          />
        ) : (
          <IconSun
            stroke={2}
            size={40}
            color="white"
            className="border border-white rounded-full p-2 cursor-pointer"
            onClick={() => setLightMode(!lightMode)}
          />
        )}
        <button className="bg-[#5044E5] text-white py-2 px-4 rounded-4xl hover:scale-105 duration-500 cursor-pointer">
          Connect &rarr;
        </button>
      </div>
    </header>
  );
};

export default Header;
