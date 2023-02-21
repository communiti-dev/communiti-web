import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContactsIcon from "@mui/icons-material/Contacts";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import PortraitIcon from "@mui/icons-material/Portrait";
import LanguageIcon from "@mui/icons-material/Language";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";

export const nextBatchDetails = {
  solana: {
    batchName: "Batch 1",
    extraPart: "st",
    date: "5 Mar 2023",
    isEnabled: true,
  },
};

export const sideBarLinks = [
  {
    id: "our_course",
    value: "Our Courses",
  },
  {
    id: "next_batch",
    value: "Next Batch",
  },
  {
    id: "course_details",
    value: "Course Details",
  },
  {
    id: "eligibility",
    value: "Eligibility",
  },
  {
    id: "what_you_learn",
    value: "What You Learn",
  },
  {
    id: "what_you_become",
    value: "What You Become",
  },
];

export const courseTimeLine = {
  solana: [
    {
      id: 1,
      icon: <CalendarTodayIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "16 Weeks",
      second: "(4 Months)",
    },
    {
      id: 1,
      icon: <AccessTimeIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "7 pm to 11 pm*",
      second: "Monday to Saturday",
    },
    {
      id: 1,
      icon: <SyncProblemIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "Doubt Sessions",
      second: "Saturday & Sunday",
    },
  ],
  solidity: [
    {
      id: 1,
      icon: <CalendarTodayIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "16 Weeks",
      second: "(4 Months)",
    },
    {
      id: 1,
      icon: <AccessTimeIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "7 pm to 11 pm*",
      second: "Monday to Saturday",
    },
    {
      id: 1,
      icon: <SyncProblemIcon color="secondary" sx={{ fontSize: "2rem" }} />,
      first: "Doubt Sessions",
      second: "Saturday & Sunday",
    },
  ],
};

export const eligibilityData = {
  solana: [
    {
      id: 1,
      icon: (
        <ContactsIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Qualification",
      description:
        "Cleared 12th Standard or are diploma holders, Ready To Take a Job Immediately After Course Finishes",
    },
    {
      id: 2,
      icon: (
        <PortraitIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Age",
      description: "Min. 18 years",
      extra: "Max. 28 yrs",
    },
    // {
    //     id: 3,
    //     icon: <SettingsAccessibilityIcon sx={{ paddingBottom: '2px', marginRight: '6px' }} color="secondary" />,
    //     heading: 'ID',
    //     description: 'Valid PAN Card and Aadhar Card'
    // },
    {
      id: 4,
      icon: (
        <RecordVoiceOverIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Communication Skills",
      description: "Basic English - speaking, reading and writing",
    },
    {
      id: 5,
      icon: (
        <LanguageIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "HARDWARE",
      description:
        "A laptop, uninterrupted internet connection (Internet Requirement - Minimum 2GB / 4GB of data per day. Download speed recommended 20mbps, minimum 10mbps).",
    },
  ],
  solidity: [
    {
      id: 1,
      icon: (
        <ContactsIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Qualification",
      description:
        "Cleared 12th Standard or are diploma holders, Ready To Take a Job Immediately After Course Finishes",
    },
    {
      id: 2,
      icon: (
        <PortraitIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Age",
      description: "Min. 18 years",
      extra: "Max. 28 yrs",
    },
    {
      id: 3,
      icon: (
        <SettingsAccessibilityIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "ID",
      description: "Valid PAN Card and Aadhar Card",
    },
    {
      id: 4,
      icon: (
        <RecordVoiceOverIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "Communication Skills",
      description: "Basic English - speaking, reading and writing",
    },
    {
      id: 5,
      icon: (
        <LanguageIcon
          sx={{ paddingBottom: "2px", marginRight: "6px" }}
          color="secondary"
        />
      ),
      heading: "HARDWARE",
      description:
        "A laptop, uninterrupted internet connection (Internet Requirement - Minimum 2GB / 4GB of data per day. Download speed recommended 20mbps, minimum 10mbps).",
    },
  ],
};
