import Image from "next/image";
import Link from "next/link";

const brand: React.FC = () => (
  <Link href={"/"}>
    <Image
      src={"/img/logo.png"}
      alt="logo"
      priority
      width={200}
      height={100}
      className=" md:!w-[200px] !w-[150px]"
    />
  </Link>
);
export default brand;
