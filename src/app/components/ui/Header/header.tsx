import Brand from "../Brand/brand";
import NavItems from "./navitems";

const header: React.FC = () => {
  return (
    <header className="py-5 ">
      <div className="container">
        <div className="flex items-center justify-between">
          <Brand />

          <nav>{<NavItems menu={true} />}</nav>
          <nav>{<NavItems icons={true} />}</nav>
        </div>
      </div>
    </header>
  );
};
export default header;
