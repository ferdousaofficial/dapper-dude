import { IconType } from "react-icons";

// Define interface for icons
export interface IconsTypes {
  [key: string]: IconType;
}

// define interface for navItems
interface NavItem {
  name: string;
  path: string;
  id: number;
}

export interface NavData {
  navItem: NavItem[];
  navButtons: NavItem[];
}
