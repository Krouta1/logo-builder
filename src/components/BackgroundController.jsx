import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
  const localStorageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(localStorageValue?.bgRounded || 0);
  const [padding, setPadding] = useState(localStorageValue?.bgPadding || 40);
  const [color, setColor] = useState(
    localStorageValue?.bgColor || "rgba(5,5,5,100)",
  );

  useEffect(() => {
    const updatedValue = {
      ...localStorageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color, localStorageValue]);

  return (
    <div>
      <div className="py-2">
        <label
          htmlFor=""
          className="flex items-center justify-between p-2 font-bold"
        >
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>
      <div className="py-2">
        <label
          htmlFor=""
          className="flex items-center justify-between p-2 font-bold"
        >
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
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
  );
};

export default BackgroundController;
