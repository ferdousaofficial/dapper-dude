import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="xl:h-screen h-fit xl:pt-0 pt-[80px]  grid place-content-center text-center">
      <div className="container">
        <div className="space-y-5">
          <span className="bg-[#f1f1f1] px-[12px] py-[5px] rounded-full font-semibold text-black text-[15.5px]">
            Experience fashion like never before
          </span>
          <h1 className="text-[38px] leading-[40px] md:text-[42px] md:leading-[45px] lg:text-[55px] lg:leading-[55px] xl:text-[66px] xl:leading-[65px] font-bold lg:w-[80%] mx-auto ">
            Dapper Dude: Style For Men That Never Goes Out of Fashion
          </h1>
        </div>
        <div className="py-5 w-fit mx-auto">
          <Image
            src={"/img/hero-img.png"}
            alt="hero image"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
