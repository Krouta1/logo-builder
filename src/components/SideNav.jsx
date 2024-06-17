/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import { ImageIcon, PencilRulerIcon, ShieldIcon } from "lucide-react";
import { useState } from "react";

const menuList = [
  {
    id: 1,
    name: "Icon",
    icon: PencilRulerIcon,
  },
  {
    id: 2,
    name: "Background",
    icon: ImageIcon,
  },
  {
    id: 3,
    name: "Upgrade",
    icon: ShieldIcon,
  },
];

const SideNav = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="h-screen border">
      {menuList.map((menu) => (
        <h2
          key={menu.id}
          onClick={() => {
            setSelectedIndex(menu.id);
            setSelectedIndex(menu.id);
          }}
          className={cn(
            "hover:bg-primary my-2 flex cursor-pointer items-center gap-2 rounded-md px-7 py-3 text-lg font-bold text-gray-500 transition-all hover:text-white",
            selectedIndex === menu.id && "bg-primary text-white",
          )}
        >
          <menu.icon className="h-6 w-6" />
          <span>{menu.name}</span>
        </h2>
      ))}
    </div>
  );
};

export default SideNav;
