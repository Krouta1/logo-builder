import { useContext } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { useUpdateStorage } from "../context/UpdateStorageContext";

const BackgroundController = () => {
  const { storage, updateStorage } = useUpdateStorage();
  const { bgRounded, bgPadding, bgColor } = storage;

  const handleRoundedChange = (newRounded) => {
    updateStorage({ bgRounded: newRounded });
  };

  const handlePaddingChange = (newPadding) => {
    updateStorage({ bgPadding: newPadding });
  };

  const handleColorChange = (newColor) => {
    updateStorage({ bgColor: newColor });
  };

  const handleInputRoundedChange = (event) => {
    const newRounded = Number(event.target.value);
    if (newRounded >= 0 && newRounded <= 50) {
      handleRoundedChange(newRounded);
    }
  };

  const handleInputPaddingChange = (event) => {
    const newPadding = Number(event.target.value);
    if (newPadding >= 0 && newPadding <= 100) {
      handlePaddingChange(newPadding);
    }
  };

  return (
    <div>
      <div className="py-2">
        <div className="flex items-center justify-between p-2 font-bold">
          <span>Rounded</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={bgRounded}
              min="0"
              max="50"
              step="1"
              onChange={handleInputRoundedChange}
              className="ml-2 w-16 border rounded p-1 text-center"
            />
            <span>px</span>
          </div>
        </div>
        <Slider
          defaultValue={[bgRounded]}
          max={50}
          step={1}
          onValueChange={(event) => handleRoundedChange(event[0])}
        />
      </div>
      <div className="py-2">
        <div className="flex items-center justify-between p-2 font-bold">
          <span>Padding</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={bgPadding}
              min="0"
              max="100"
              step="1"
              onChange={handleInputPaddingChange}
              className="ml-2 w-16 border rounded p-1 text-center"
            />
            <span>px</span>
          </div>
        </div>
        <Slider
          defaultValue={[bgPadding]}
          max={100}
          step={1}
          onValueChange={(event) => handlePaddingChange(event[0])}
        />
      </div>
      <div className="py-2">
        <label
          htmlFor=""
          className="flex items-center justify-between p-2 font-bold"
        >
          Color
        </label>
        <ColorPickerController color={bgColor} setColor={handleColorChange} />
      </div>
    </div>
  );
};

export default BackgroundController;
