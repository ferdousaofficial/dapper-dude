import { navData } from "@/config/constant";
import Link from "next/link";
import Icon from "../../shared/Icon";

interface NavItemsProps {
  menu?: boolean | null;
  icons?: boolean | null;
}

const navitems: React.FC<NavItemsProps> = ({ menu, icons }) => {
  return (
    <div>
      <ul className={`flex items-center ${menu ? "gap-10" : "gap-1"}`}>
        {menu
          ? navData.navItem.map((e) => (
              <Link href={e.path} key={e.id}>
                <li className="capitalize font-semibold text-title smooth hover:text-text">
                  {e.name}
                </li>
              </Link>
            ))
          : navData.navButtons.map((e) => (
              <Link href={e.path} key={e.id}>
                <div className="smooth hover:bg-[#f3f2f2] h-[40px] w-[40px] grid place-content-center rounded-full">
                  <Icon name={e.name} className="text-title " />
                </div>
              </Link>
            ))}
      </ul>
    </div>
  );
};
export default navitems;
