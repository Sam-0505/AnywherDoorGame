import { LAYERS, MAP_DIMENSIONS, SOLID_TILES, WIN_TILES } from "./constants";

export const isSolidTile = (x, y, level) => {
  for (let layer of LAYERS[level - 1]) {
    if (SOLID_TILES.includes(layer[y][x])) {
      return true;
    }
  }
  return false;
};

export const isFinish = (x, y, level) => {
  for (let layer of LAYERS[level - 1]) {
    if (WIN_TILES.includes(layer[y][x])) {
      return true;
    }
  }
  return false;
};

export const isMapEdge = (x, y) => {
  const { ROWS, COLS } = MAP_DIMENSIONS;
  return x < 0 || x >= COLS || y < 0 || y >= ROWS;
};

export const checkMapCollision = (x, y, level) => {
  return isMapEdge(x, y) || isSolidTile(x, y, level);
};

export const isTeleportBoudary = (x, y, tx, ty) => {
  return tx - x >= 3 || tx - x <= -3 || ty - y >= 3 || ty - y <= -3;
};
