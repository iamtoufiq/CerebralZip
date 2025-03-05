import React from "react";
// import "./ToolTip.scss";

interface ToolTipProps {
  data: { x: number; y: number; yLabel: number };
  isShow: boolean;
  position: { top?: number; left?: number };
  color: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ data, isShow, position, color }) => {
  if (!isShow || !position.top || !position.left) return null;

  return (
    <div
      style={{ top: position.top + window.pageYOffset, left: position.left + window.pageXOffset, color }}
      className="tooltip-wrapper"
    >
      {data.yLabel}
    </div>
  );
};

export default ToolTip;
