/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { icons } from "lucide-react";
import { UpdateStorageContext } from "../context/UpdateStorageContext";
import { useContext, useEffect } from "react";

const LogoPreview = () => {
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setUpdateStorage(storageData);
  }, [updateStorage, setUpdateStorage]);

  const Icon = ({ name, size, color }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;

    return (
      <LucidIcon
        size={size}
        color={color}
        style={{ transform: `rotate(${updateStorage?.iconRotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: `${updateStorage?.bgPadding}px`,
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: `${updateStorage?.bgRounded}%`,
            background: updateStorage?.bgColor,
          }}
        >
          <Icon
            size={updateStorage?.iconSize}
            color={updateStorage?.iconColor}
            name={updateStorage?.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;