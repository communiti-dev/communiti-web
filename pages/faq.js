import * as React from "react";
import { styled } from "@mui/material/styles";
import AddIcon from "@material-ui/icons/Add";
import MuiAccordion from "@mui/material/Accordion";
import RemoveIcon from "@material-ui/icons/Remove";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { faqsData } from "../src/data/faq";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: "1rem 0",
  borderRadius: "10px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(6),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionSummary = styled((props) => {

    return (
      <MuiAccordionSummary
        expandIcon={
          props.changeIcon ? (
            <RemoveIcon sx={{ fontSize: "45px" }} />
          ) : (
            <AddIcon sx={{ fontSize: "45px" }} />
          )
        }
        {...props}
      />
    );
  })(({ theme }) => ({
    backgroundColor: "transparent",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Grid item md={12}>
        <Typography component="div">
          <Box fontSize={60} fontWeight={600} textAlign="center" my={6}>
            FAQ's
          </Box>
        </Typography>
      </Grid>
      <Grid item md={8} sx={{margin: "0 20px"}}>
        {faqsData.map((item) => (
          <Accordion
            className="faq-accordion"
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              changeIcon={expanded === item.id}
              aria-controls="panel1d-content"
              id="faq-panel1d-header"
            >
              <Typography>
                <Box fontSize={16} fontWeight={600}>
                  {item.qus}
                </Box>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}
