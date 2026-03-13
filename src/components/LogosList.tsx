//Next
import Image from "next/image";

//Interface
interface LogosListProps {
  urlImage: string;
  altName: string;
}

const LogosList = ({ urlImage, altName }: LogosListProps) => {
  return (
    <Image src={`/img/${urlImage}`} alt={altName} width={100} height={100} />
  );
};

export default LogosList;
