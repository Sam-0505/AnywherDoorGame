import { useContext, useEffect } from "react";
import { connect } from "react-redux";

import {
  LAYERS,
  MAP_DIMENSIONS,
  MAP_TILE_SCALE,
  TILE_SIZE,
} from "../common/constants";
import CanvasContext from "../pages/components/canvasContext";
import { loadMap } from "./slices/statusSlice";
import { UserContext } from "../pages/userContext";

const mapDispatch = { loadMap };

const Map = ({ loadMap }) => {
  const ctx = useContext(CanvasContext);
  const { COLS, ROWS } = MAP_DIMENSIONS;

  const { globUser } = useContext(UserContext);

  useEffect(() => {
    if (ctx) {
      console.log("map effect");
      const drawLayer = (grid) => {
        for (let i = 0; i < ROWS; i++) {
          for (let j = 0; j < COLS; j++) {
            const item = grid[i][j];
            if (!item) {
              // empty tile
              continue;
            }
            const img = document.querySelector(`#map-tile-img-${item}`);
            const x = j * TILE_SIZE;
            const y = i * TILE_SIZE;
            ctx.drawImage(
              img,
              0,
              0,
              TILE_SIZE,
              TILE_SIZE,
              x,
              y,
              TILE_SIZE * MAP_TILE_SCALE[item],
              TILE_SIZE * MAP_TILE_SCALE[item]
            );
          }
        }
      };

      drawLayer(LAYERS[globUser.level - 1][0]);
      drawLayer(LAYERS[globUser.level - 1][1]);
      loadMap(true);
    }
  }, [COLS, ROWS, ctx, loadMap]);
  return null;
};

export default connect(null, mapDispatch)(Map);
