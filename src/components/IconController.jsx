import { SmileIcon } from "lucide-react";
import { Slider } from "./ui/slider";
import { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";

const IconController = () => {
  const localStorageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(localStorageValue?.iconSize || 280);
  const [rotate, setRotate] = useState(localStorageValue?.iconRotate || 0);
  const [color, setColor] = useState(
    localStorageValue?.iconColor || "rgba(255,255,255,1)",
  );

  useEffect(() => {
    const updatedValue = {
      ...localStorageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "SmileIcon",
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, localStorageValue]);

  return (
    <div>
      <div>
        <label htmlFor="" className="font-bold">
          Icon
        </label>
        <div className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md bg-gray-200 p-3">
          <SmileIcon className="" />
        </div>
        <div className="py-2">
          <label
            htmlFor=""
            className="flex items-center justify-between p-2 font-bold"
          >
            Size <span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor=""
            className="flex items-center justify-between p-2 font-bold"
          >
            Rotate <span>{rotate} °</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor=""
            className="flex items-center justify-between p-2 font-bold"
          >
            Color
          </label>
          <ColorPickerController color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default IconController;
