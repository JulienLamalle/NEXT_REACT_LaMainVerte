import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React from "react";

const wrapperStyle = { width: "100%" };

const SliderInput = ({ classNames, label, opacityValue }) => {
  return (
    <div style={wrapperStyle} className={classNames ? classNames.join() : ""}>
      <h5 className="my-4" style={{ fontSize: "1rem" }}>
        {label}
      </h5>
      <Slider
        min={0}
        defaultValue={100}
        marks={{
          0: 0,
          10: 10,
          20: 20,
          30: 30,
          40: 40,
          50: 50,
          60: 60,
          70: 70,
          80: 80,
          90: 90,
          100: 100,
        }}
        step={null}
        onChange={(value)=>opacityValue(value)}
      />
    </div>
  );
};

export default SliderInput;
