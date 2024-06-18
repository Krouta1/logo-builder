import { Slider } from "./ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import IconList from "./IconList";
import { useUpdateStorage } from "../context/UpdateStorageContext";

const IconController = () => {
  const { storage, updateStorage } = useUpdateStorage();
  const { iconSize, iconRotate, iconColor } = storage;

  const handleSizeChange = (newSize) => {
    updateStorage({ iconSize: newSize });
  };

  const handleRotateChange = (newRotate) => {
    updateStorage({ iconRotate: newRotate });
  };

  const handleColorChange = (newColor) => {
    updateStorage({ iconColor: newColor });
  };

  const handleInputSizeChange = (event) => {
    const newSize = Number(event.target.value);
    if (newSize >= 0 && newSize <= 512) {
      handleSizeChange(newSize);
    }
  };

  const handleInputRotateChange = (event) => {
    const newRotate = Number(event.target.value);
    if (newRotate >= 0 && newRotate <= 360) {
      handleRotateChange(newRotate);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="" className="font-bold">
          Icon
        </label>
        <div>
          <IconList/>
        </div>
        <div className="py-2">
          <div className="flex items-center justify-between p-2 font-bold">
            <span>Size</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={iconSize}
                min="0"
                max="512"
                step="1"
                onChange={handleInputSizeChange}
                className="ml-2 w-16 border rounded p-1 text-center"
              />
              <span>px</span>
            </div>
          </div>
          <Slider
            defaultValue={[iconSize]}
            max={512}
            step={1}
            onValueChange={(event) => handleSizeChange(event[0])}
          />
        </div>
        <div className="py-2">
          <div className="flex items-center justify-between p-2 font-bold">
            <span>Rotate</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={iconRotate}
                min="0"
                max="360"
                step="1"
                onChange={handleInputRotateChange}
                className="ml-2 w-16 border rounded p-1 text-center"
              />
              <span>°</span>
            </div>
          </div>
          <Slider
            defaultValue={[iconRotate]}
            max={360}
            step={1}
            onValueChange={(event) => handleRotateChange(event[0])}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor=""
            className="flex items-center justify-between p-2 font-bold"
          >
            Color
          </label>
          <ColorPickerController color={iconColor} setColor={handleColorChange} />
        </div>
      </div>
    </div>
  );
};

export default IconController;
