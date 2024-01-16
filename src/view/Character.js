import React, { useEffect, useContext, useRef } from "react";
import { connect } from "react-redux";

import CanvasConext from "../pages/components/canvasContext";
import {
  HEROES_SPRITE,
  HERO_IMAGE_SIZE,
  DOOR_IMAGE,
  TILE_SIZE,
} from "../common/constants";
import { bufferImage, bufferDoor } from "./slices/characterSlice";
import { loadCharacter } from "./slices/statusSlice";

const Character = ({
  x,
  y,
  tx,
  ty,
  sx,
  sy,
  heroImg,
  doorImg,
  loadCharacter,
  bufferImage,
  bufferDoor,
  teleportMode,
}) => {
  const ctx = useContext(CanvasConext);
  const imgRef = useRef(null);
  const doorRef = useRef(null);
  useEffect(() => {
    if (ctx && heroImg && doorImg) {
      if (teleportMode) {
        ctx.drawImage(
          document.querySelector(heroImg),
          sx,
          sy,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE,
          tx * TILE_SIZE,
          ty * TILE_SIZE,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE
        );
        ctx.drawImage(
          document.querySelector(doorImg),
          x * TILE_SIZE,
          y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
        ctx.strokeStyle = "cyan";
        ctx.lineWidth = 1;
        ctx.strokeRect(
          (tx - 2) * TILE_SIZE,
          (ty - 2) * TILE_SIZE,
          5 * TILE_SIZE,
          5 * TILE_SIZE
        );
        ctx.strokeStyle = "black";
      } else {
        ctx.drawImage(
          document.querySelector(heroImg),
          sx,
          sy,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE,
          x * TILE_SIZE,
          y * TILE_SIZE,
          HERO_IMAGE_SIZE,
          HERO_IMAGE_SIZE
        );
      }

      loadCharacter(true);
    }
  }, [ctx, heroImg, doorImg, x, y, loadCharacter, teleportMode, sx, sy]);
  return (
    <>
      <img
        id="character"
        alt="character"
        ref={imgRef}
        onLoad={() => bufferImage(`#${imgRef.current.id}`)}
        className="images-buffer"
        src={HEROES_SPRITE}
      />
      <img
        id="door"
        alt="door"
        ref={doorRef}
        onLoad={() => bufferDoor(`#${doorRef.current.id}`)}
        className="images-buffer"
        src={DOOR_IMAGE}
      />
    </>
  );
};

const mapStateToProps = (state) => ({ ...state.character });

const mapDispatch = { loadCharacter, bufferImage, bufferDoor };

export default connect(mapStateToProps, mapDispatch)(Character);
