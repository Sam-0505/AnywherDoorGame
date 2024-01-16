import { useContext, useEffect } from "react";
import CanvasContext from "../pages/components/canvasContext";
import { TILE_SIZE } from "../common/constants";
const Grid = ({ width, height, children }) => {
  const ctx = useContext(CanvasContext);
  useEffect(() => {
    if (ctx) {
      for (let i = 0; i < height; i++) {
        const y = i * TILE_SIZE;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      for (let j = 0; j < width; j++) {
        const x = j * TILE_SIZE;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
    }
  }, [ctx, height, width]);
  return children;
};
export default Grid;
