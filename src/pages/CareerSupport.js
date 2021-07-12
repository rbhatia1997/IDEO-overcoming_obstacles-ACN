import React from "react";
import CareerSupportCard from "../components/CareerSupportCard.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
  },
}));

function CareerSupportPage() {
  const classesGrid = useStylesGrid();
  return (
    <div className={classesGrid.root}>
      <Grid>
        <Grid item xs={12}>
          <Paper className={classesGrid.paper}>
            <CareerSupportCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default CareerSupportPage;
