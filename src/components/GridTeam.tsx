//Next
import Image from "next/image";

//Interface
interface GridTeamProps {
  urlImage: string;
  name: string;
  jobPosition: string;
  lightMode: boolean;
}

const GridTeam = ({
  urlImage,
  name,
  jobPosition,
  lightMode,
}: GridTeamProps) => {
  return (
    <div
      className={`${lightMode ? "bg-[#101828] border-2 border-[#364153]" : "bg-white border-2 border-white"} flex flex-row items-center gap-4 shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5 rounded-xl hover:scale-105 duration-300`}
    >
      <Image
        src={`/img/${urlImage}`}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div
        className={`${lightMode ? "text-white" : ""} flex flex-col justify-center`}
      >
        <h1>{name}</h1>
        <p className="text-sm opacity-70">{jobPosition}</p>
      </div>
    </div>
  );
};

export default GridTeam;
