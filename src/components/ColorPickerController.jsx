/* eslint-disable react/prop-types */
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false, color, setColor }) => {
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
          setColor(e);
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
