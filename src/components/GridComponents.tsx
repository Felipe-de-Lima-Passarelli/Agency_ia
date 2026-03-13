//Next
import Image from "next/image";

//Interface
interface GridComponents {
  urlImage: string;
  altImage: string;
  title: string;
  desc: string;
  lightMode: boolean;
}

const GridComponents = ({
  urlImage,
  altImage,
  title,
  desc,
  lightMode,
}: GridComponents) => {
  return (
    <div
      className={` ${lightMode ? "bg-[#101828] border-[#192232]" : "bg-white border-white"} shadow-[0_0_10px_rgba(0,0,0,0.15)] border-2 flex flex-row items-center p-[4%] gap-10 hover:scale-105 duration-500`}
    >
      <Image
        src={`/img/${urlImage}_logo.svg`}
        alt={altImage}
        width={100}
        height={100}
        className="border-10 border-gray-300 rounded-full"
      />
      <div
        className={`flex flex-col gap-2 ${lightMode ? "text-white" : "text-[#252e3d]"}`}
      >
        <h1 className="font-semibold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default GridComponents;
