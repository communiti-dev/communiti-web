import { Card, CardContent, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

const CourseDetailsCard = ({ icon, firstContent, secondContent }) => {
  return (
    <Grid item md={4} sx={{ width: "100%" }}>
      <Card
        sx={{
          background: "#fff",
          marginTop: "1rem",
          fontWeight: "400",
          textShadow: "none",
          textAlign: "center",
          border: "1px #F3F2F2 solid",
        }}
      >
        <CardContent>
          {icon}
          <Typography
            variant="body2"
            component="div"
            gutterBottom
            sx={{
              color: "#333",
              fontSize: "1.2rem",
              textShadow: "none",
              paddingTop: ".6rem",
            }}
          >
            {firstContent}
            <br />
            {secondContent}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseDetailsCard;
