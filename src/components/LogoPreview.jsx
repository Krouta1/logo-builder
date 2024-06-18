/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { icons } from "lucide-react";
import {useUpdateStorage} from "../context/UpdateStorageContext"

const LogoPreview = () => {

  const { storage, updateStorage } = useUpdateStorage();
  const {bgRounded, bgPadding,bgColor,iconSize, iconRotate,iconColor,icon} = storage


  const Icon = ({ name, size, color }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;

    return (
      <LucidIcon
        size={size}
        color={color}
        style={{ transform: `rotate(${iconRotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: `${bgPadding}px`,
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: `${bgRounded}%`,
            background: bgColor,
          }}
        >
          <Icon
            size={iconSize}
            color={iconColor}
            name={icon}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;

