"use client";

import { useState } from "react";
import Brand from "../Brand/brand";
import NavItem from "./navitem";
import MobileMenu from "./mobileMenu";

const header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className="py-5 relative">
      <div className="container">
        <div className="flex items-center justify-between">
          <Brand />

          {/* toggle mobile menu button */}
          <div className="lg:hidden absolute right-4">
            <button
              className={`uppercase text-title font-semibold text-[15px] tracking-wider ${
                toggleMenu && "text-white"
              }`}
            >
              {!toggleMenu ? "menu" : "close"}
            </button>
          </div>

          {/* mobile menu */}
          <MobileMenu />

          {<NavItem menu={true} />}
          {<NavItem icons={true} />}
        </div>
      </div>
    </header>
  );
};
export default header;
