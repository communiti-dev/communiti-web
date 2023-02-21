import { Grid, Typography } from "@mui/material";
import React from "react";

const EligibilityCard = ({ icon, heading, description, extra }) => {
  return (
    <Grid container item md={6} sx={{ paddingTop: "1.5rem" }}>
      <Grid item xs={2} sm={2} md={1}>
        {icon}
      </Grid>
      <Grid item xs={9} sm={9} md={8}>
        <Typography variant="subtitle2" sx={{ color: "#333" }}>
          {heading}
        </Typography>
        <Typography variant="caption" sx={{ color: "#333" }}>
          {description}
          {extra && (
            <>
              <br />
              Max. 28 yrs
            </>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EligibilityCard;
