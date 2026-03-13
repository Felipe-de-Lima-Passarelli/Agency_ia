//Next
import Image from "next/image";

//Interface
interface GridWorkProps {
  urlImage: string;
  altImage: string;
  title: string;
  desc: string;
  lightMode: boolean;
}

const GridWork = ({
  urlImage,
  altImage,
  title,
  desc,
  lightMode,
}: GridWorkProps) => {
  return (
    <div className="flex flex-col gap-2 hover:scale-105 duration-300">
      <Image
        src={`/img/work_${urlImage}.png`}
        alt={altImage}
        width={1000}
        height={1000}
      />
      <h1
        className={`${lightMode ? "text-white" : "text-[#364153]"} font-semibold`}
      >
        {title}
      </h1>
      <p
        className={`${lightMode ? "text-white" : "text-[#364153]"} opacity-70`}
      >
        {desc}
      </p>
    </div>
  );
};

export default GridWork;
