import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import BecomeCard from "./BecomeCard";
import EligibilityCard from "./ElegiblityCard";
import WeekDetailsCard from "./WeekDetailsCard";
import SendIcon from "@mui/icons-material/Send";
import { courseTimeLine, eligibilityData, nextBatchDetails } from "./data";
import { weekDetailsData } from "./weekData";
import { becomeData } from "./becomeData";
import CourseDetailsCard from "./CourseDetailsCard";

const CourseDetails = ({ coursePathName, detailedPath }) => {
  const viewDetailedCourse = () => {
    window.open(detailedPath);
  };
  const applyNow = () => {
    if (nextBatchDetails?.[coursePathName]?.isEnabled) {
      window.open(
        "https://build.communiti.dev/store/Solana-Bootcamp-7c0mmeuaxy0e"
      );
    }
  };
  return (
    <>
      <div id="next_batch">
        <Typography variant="h4" component="h5" sx={{ marginTop: "2rem" }}>
          Next Batch
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Card
            sx={{
              background: "#fff",
              border: "1px #F3F2F2 solid",
              marginTop: "1rem",
              fontWeight: "400",
              textShadow: "none",
            }}
          >
            <CardContent>
              <Grid container spacing={1}>
                <Grid item md={7}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ fontSize: 14, fontWeight: 600 }}
                    color="#111"
                    gutterBottom
                  >
                    {nextBatchDetails.solana.batchName}
                    <sup>{nextBatchDetails.solana.extraPart}</sup>
                  </Typography>
                  <Typography
                    variant="OVERLINE"
                    sx={{ fontSize: 12, fontWeight: 600 }}
                    color="#111"
                    gutterBottom
                  >
                    Starts {nextBatchDetails.solana.date}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    sx={{ marginTop: "10px", marginLeft: "10px" }}
                    variant="outlined"
                    color="secondary"
                    endIcon={<SendIcon />}
                    onClick={applyNow}
                  >
                    Apply Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6}></Grid>
        <div id="course_details"></div>
        <Grid item xs={12} sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" gutterBottom>
            Course Details
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Completing a 16-week blockchain boot camp makes you future-ready and
            high-paying job ready with valuable skills in blockchain
            development, smart contract programming, and decentralised
            applications.
          </Typography>
        </Grid>
        {courseTimeLine[coursePathName].map((item) => (
          <CourseDetailsCard
            icon={item.icon}
            firstContent={item.first}
            secondContent={item.second}
            key={item.id}
          />
        ))}
        <Grid item xs={12}>
          Note: &nbsp;
          <Typography variant="body2" component="span" gutterBottom>
            This time commitment is subject to changes based on your evaluation
            performance & learning requirements.
          </Typography>
        </Grid>
        <div id="eligibility"></div>
        <Grid item xs={12}>
          <Card
            sx={{
              background: "#fff",
              marginTop: "1rem",
              fontWeight: "400",
              border: "1px #F3F2F2 solid",
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Minimum Criteria
              </Typography>
              <Typography variant="OVERLINE" gutterBottom>
                You should meet the following requirements to be eligible for
                this course.
              </Typography>

              <Grid container>
                {eligibilityData[coursePathName].map((item) => (
                  <EligibilityCard
                    key={item.id}
                    icon={item.icon}
                    heading={item.heading}
                    description={item.description}
                    extra={item.extra}
                  />
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <div id="what_you_learn"></div>
        <Grid item xs={12} sx={{ marginTop: "3rem" }}>
          <Typography variant="h4" gutterBottom>
            What you'll learn
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
            {weekDetailsData[coursePathName].map((singleWeek) => (
              <WeekDetailsCard
                key={singleWeek.week}
                week={singleWeek.week}
                content={singleWeek.content}
              />
            ))}
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                onClick={viewDetailedCourse}
                sx={{ marginTop: "10px", marginLeft: "10px" }}
                variant="outlined"
                color="secondary"
                endIcon={<SendIcon />}
              >
                VIEW DETAILED CURRICULUM
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <div id="what_you_become"></div>
        <Grid item xs={12} sx={{ marginTop: "3rem" }}>
          <Card
            sx={{
              background: "#fff",
              marginTop: "1rem",
              fontWeight: "400",
              border: "1px #F3F2F2 solid",
              padding: "1.5rem .5rem",
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom>
                What You Could Become
              </Typography>
              <Typography variant="OVERLINE" sx={{ color: "#111" }}>
                Completing a 16-week blockchain boot camp makes you future-ready
                and high-paying job ready with valuable skills in blockchain
                development, smart contract programming, and decentralised
                applications.
              </Typography>
              <Grid container sx={{ marginTop: "1rem" }} spacing={3}>
                {becomeData[coursePathName].map((text) => (
                  <BecomeCard key={text} text={text} />
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseDetails;
