//Next
import Image from "next/image";

//Interface
interface FooterProps {
  lightMode: boolean;
}

const Footer = ({ lightMode }: FooterProps) => {
  return (
    <>
      <footer
        className={`${lightMode ? "text-white bg-[#101828]" : "bg-[#F8FAFC]"} mt-5 flex flex-row justify-between items-center py-[2%] px-[10%]`}
      >
        <div className="flex flex-col justify-center gap-3 w-[30%]">
          <Image
            src={`/img/agency.ai${lightMode ? "_white" : ""}_logo.svg`}
            alt="Agency Logo"
            width={1000}
            height={1000}
            className="w-[30%] min-w-[30%]"
          />
          <p className="opacity-80 text-sm">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
          <ul className="flex flex-row items-center gap-10 opacity-80">
            <li>Home</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h1 className="opacity-80">Subscribe to our newsletter</h1>
          <p className="opacity-80 text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className={`border-2 border-gray-200 outline-none p-2 w-full ${lightMode ? "placeholder:text-white" : ""}`}
            />
            <button className="bg-[#5044E5] text-white px-4 rounded-md cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
      <div
        className={`${lightMode ? "text-white bg-[#101828]" : "bg-[#F8FAFC]"}`}
      >
        <hr className="mx-[10%] pb-[2%] opacity-30" />
      </div>
      <p
        className={`${lightMode ? "text-white bg-[#101828]" : "bg-[#F8FAFC]"} text-center py-1`}
      >
        © {new Date().getFullYear()} • Projeto desenvolvido por
        <a href="https://github.com/Felipe-de-Lima-Passarelli" target="_blank">
          <span className="font-semibold ml-1">Felipe de Lima Passarelli</span>
        </a>
      </p>
    </>
  );
};

export default Footer;
