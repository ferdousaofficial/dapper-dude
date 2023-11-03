import { navData } from "@/config/constant";
import Link from "next/link";
import Icon from "../../shared/Icon";
import { motion, AnimatePresence } from "framer-motion";
import {
  menuAnimation,
  menuBtnsAnimation,
  menuItemAnimation,
} from "./animation";
interface mobileMenuProps {
  toggleMenu: boolean;
}

const mobileMenu: React.FC<mobileMenuProps> = ({ toggleMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {toggleMenu && (
        <motion.div
          variants={menuAnimation}
          animate="enter"
          exit={"exit"}
          initial="initial"
          className={`${
            toggleMenu && "h-screen"
          } lg:hidden top-0 w-full fixed left-0 bg-[#ffdc61] h-0 grid place-content-center z-[1]`}
        >
          <nav>
            <ul className="text-center">
              {navData.navItem.map((e) => (
                <motion.div
                  variants={menuItemAnimation}
                  custom={e.id + 2}
                  animate="enter"
                  exit={"exit"}
                  initial="initial"
                  key={e.id}
                >
                  <Link href={e.path} key={e.id}>
                    <li className="md:text-[40px] text-[36px] text-black uppercase font-semibold py-2">
                      {e.name}
                    </li>
                  </Link>
                </motion.div>
              ))}
            </ul>

            <ul className="flex items-center gap-5 py-5 justify-center">
              {navData.navButtons.map((e) => (
                <motion.div
                  variants={menuBtnsAnimation}
                  custom={e.id + 2}
                  animate="enter"
                  exit={"exit"}
                  initial="initial"
                  className={`${toggleMenu && "opacity-100"} opacity-0`}
                  key={e.id}
                >
                  <Link href={e.path} key={e.id}>
                    <Icon name={e.name} className="text-[25px] text-black " />
                  </Link>
                </motion.div>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default mobileMenu;
