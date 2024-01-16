import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import ImagesBuffer from "../../view/ImagesBuffer";
import Map from "../../view/Map";
import CanvasContext from "./canvasContext";
import Character from "../../view/Character";
import {
  MAP_DIMENSIONS,
  TILE_SIZE,
  MAP_TILE_IMAGES,
} from "../../common/constants";
import Grid from "../../view/grid";

const TileView = ({ mapImagesLoaded, gameStatus }) => {
  const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
  const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;
  const ctx = useContext(CanvasContext);

  useEffect(() => {
    return () => {
      return () => ctx && ctx.clearRect(0, 0, ctx.width, ctx.height);
    };
  }, [ctx]);

  return (
    <>
      <ImagesBuffer />
      {Object.keys(mapImagesLoaded).length ===
        Object.keys(MAP_TILE_IMAGES).length && (
        <>
          <Grid width={width} height={height}>
            <Map />
          </Grid>
        </>
      )}
      {gameStatus.mapLoaded && <Character />}
    </>
  );
};

const mapStateToProps = ({ mapImagesLoaded, gameStatus }) => ({
  mapImagesLoaded,
  gameStatus,
});

export default connect(mapStateToProps)(TileView);
