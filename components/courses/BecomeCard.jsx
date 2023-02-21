import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const BecomeCard = ({ text }) => {
  return (
    <Grid item md={3}>
      <Card sx={{ background: "#fff", fontWeight: "400" }}>
        <CardContent>
          <Typography
            variant="subtitle2"
            sx={{ color: "#9C27B1", textShadow: "none", textAlign: "center" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BecomeCard;
