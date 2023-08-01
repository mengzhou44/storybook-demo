import React, { useState } from "react";

interface LightProps {
  color: "red" | "yellow" | "green";
  size: "25px" | "50px" | "75px";
}

export const Light: React.FC<LightProps> = ({
  color = "red",
  size = "25px",
}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: isOn ? color : "gray",
        }}
      ></div>
      <button onClick={handleToggle}>{isOn ? "Turn Off" : "Turn On"}</button>
    </div>
  );
};
