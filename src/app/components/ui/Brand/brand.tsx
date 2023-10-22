import Image from "next/image";
import Link from "next/link";

const brand: React.FC = () => (
  <Link href={"/"}>
    <Image
      src={"/img/logo.png"}
      alt="logo"
      width={200}
      height={100}
      priority
    />
  </Link>
);
export default brand;
