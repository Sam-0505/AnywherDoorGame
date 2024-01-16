import { createSlice } from "@reduxjs/toolkit";
import { checkMapCollision, isTeleportBoudary } from "../../common/utils";

const initialState = {
  x: 1,
  y: 1,
  heroClass: "FLAME_SWORDSMAN",
  doorClass: "ARCHER",
  heroImg: null,
  doorImg: null,
  teleportMode: false,
  tx: 1,
  ty: 1,
  sx: 5,
  sy: 9,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    move(state, action) {
      const [x, y] = action.payload;
      if (
        state.teleportMode &&
        !isTeleportBoudary(state.tx, state.ty, state.x + x, state.y + y)
      ) {
        state.x += x;
        state.y += y;
      } else if (!state.teleportMode) {
        state.x += x;
        state.y += y;
        state.tx += x;
        state.ty += y;
        state.sx = state.sx === 5 ? 75 : 5;
      }
    },
    bufferImage(state, action) {
      state.heroImg = action.payload;
    },
    bufferDoor(state, action) {
      state.doorImg = action.payload;
    },
    teleport(state, action) {
      const level = action.payload;
      if (state.teleportMode && !checkMapCollision(state.x, state.y, level)) {
        state.tx = state.x;
        state.ty = state.y;
      } else {
        state.x = state.tx;
        state.y = state.ty;
      }
      state.teleportMode = !state.teleportMode;
    },
    reset(state, action) {
      state = Object.assign(state, initialState);
    },
  },
});

export const { move, bufferImage, teleport, reset, bufferDoor } =
  characterSlice.actions;

export default characterSlice.reducer;
