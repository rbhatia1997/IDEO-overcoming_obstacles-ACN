import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function ImgMediaCard2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 style={{ margin: 10 }}>
        {" "}
        I Need Help Submitting My Application & FAQs{" "}
      </h1>
      <GridList cellHeight={300} spacing={30}>
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} />
            {/* actionIcon=
            {
              <IconButton
                aria-label={`info about ${tile.title}`}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            } */}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
