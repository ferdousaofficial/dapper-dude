import classNames from "classnames";
import { NavData } from "./types";

// whenever we need to change default className value we will use this
export const cx = classNames;

// navbar
export const navData: NavData = {
  navItem: [
    { name: "home", path: "/", id: 0 },
    { name: "products", path: "/products", id: 1 },
    { name: "category", path: "/category", id: 3 },
    { name: "sales", path: "/sales", id: 2 },
  ],
  navButtons: [
    { name: "search", path: "/", id: 1 },
    { name: "bag", path: "/", id: 2 },
    { name: "user", path: "/", id: 0 },
  ],
};
