import { Grid, Typography } from "@mui/material";
import React from "react";

const WeekDetailsCard = ({ week, content }) => {
  return (
    <Grid item md={6}>
      <Typography
        variant="subtitle2"
        sx={{ color: "#9C27B1", textShadow: "none" }}
      >
        Week {week}
      </Typography>
      <Typography variant="caption" sx={{ color: "#111" }}>
        {content}
      </Typography>
    </Grid>
  );
};

export default WeekDetailsCard;
