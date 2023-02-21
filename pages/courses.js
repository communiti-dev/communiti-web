import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Button, Grid, Tab, Tabs } from "@mui/material";
import AddLinkIcon from "@mui/icons-material/AddLink";
import CourseDetails from "../components/courses/CourseDetails";
import { sideBarLinks } from "../components/courses/data";
import { useCurrentWidth } from "../src/hooks/getWidth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ color: "#333" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Courses() {
  const [coursePath, setCoursePath] = useState("solana");
  const selectCourse = (evn, newValue) => {
    setCoursePath(newValue);
  };
  const isDesktopView = useCurrentWidth() > 768 ? true : false;
  const drawerWidth = isDesktopView ? 310 : 0;
  const joinDiscord = () => {
    window.open("https://discord.com/invite/VnKnC9kD4K");
  };
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "9rem",
        paddingLeft: ".5rem",
        background: "#fff",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 30}px)`,
          ml: `${drawerWidth}px`,
          paddingTop: "0rem",
          paddingRight: "1rem",
          background: "#fff",
          minHeight: "60px",
          boxShadow: "none",
          marginTop: "7.5rem",
        }}
      >
        <Toolbar
          sx={{
            borderRadius: "20px",
            background: "#6F71CC",
            minHeight: "60px",
            boxShadow: `0px 2px 2px 0px #fff, 
                        0px 3px 1px -2px #fff, 
                        0px 1px 5px 0px #fff`,
          }}
        >
          <Grid container>
            <Grid item md={3}>
              <Typography
                variant="button"
                component="div"
                sx={{
                  background: "#8589D4",
                  margin: "1rem 0rem",
                  padding: ".5rem 1rem",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <AccessTimeIcon
                  sx={{ paddingBottom: "2px", marginRight: "6px" }}
                />{" "}
                Part Time
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="button"
                component="div"
                sx={{
                  background: "#8589D4",
                  padding: ".5rem 1rem",
                  margin: "1rem 0rem",
                  borderRadius: "5px",
                  marginLeft: "1rem",
                  display: "flex",
                }}
              >
                <CalendarTodayIcon
                  sx={{ paddingBottom: "0px", marginRight: "6px" }}
                />{" "}
                16 Weeks
              </Typography>
            </Grid>
            <Grid item xs={2} md={3}></Grid>
            <Grid item md={3}>
              <Typography
                variant="button"
                component="div"
                sx={{
                  borderRadius: "5px",
                  margin: "1rem 0rem",
                  margin: "1rem",
                  cursor: "pointer",
                }}
                onClick={joinDiscord}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ padding: ".5rem 1rem" }}
                >
                  <AddLinkIcon
                    sx={{ paddingBottom: "2px", marginRight: "6px" }}
                  />{" "}
                  Join Discord
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: "20px",
            borderRight: "2px #0A0A13 solid",
            color: "#0A0A13",
            textShadow: "0px 0px #0A0A13",
            marginTop: "7.5rem",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>Block Chain Developer - Part Time</Toolbar>
        <Divider />
        <List>
          {sideBarLinks.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText
                  primary={<a href={`#${item.id}`}>{item.value}</a>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 9 }}>
        {/* <Toolbar /> */}
        <Tabs
          value={coursePath}
          onChange={selectCourse}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="select course"
        >
          <div id="our_course" />

          <Tab sx={{ color: "#0A0A13" }} value="solana" label="Solana Path" />
          {/* <Tab
            sx={{ color: "#0A0A13" }}
            value="solidity"
            label="Solidity Path"
          /> */}
        </Tabs>
        <TabPanel value={coursePath} index={"solana"}>
          <CourseDetails
            coursePathName="solana"
            detailedPath="https://www.notion.so/Solana-Path-Rust-3cc6ea99968d498f84e495a78dc4f44d"
          />
        </TabPanel>
        {/* <TabPanel value={coursePath} index={"solidity"}>
          <CourseDetails
            coursePathName="solidity"
            detailedPath="https://www.notion.so/Solidity-Path-Ethereum-245c7ffd7c6f487a945f0fbf34fa2fa0"
          />
        </TabPanel> */}
      </Box>
    </Box>
  );
}
