import { Link } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import { youtubeGray } from "../utils/constants";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//rafce
const Navbar = ({ sideBarStatus, onDataChange }) => {
  return (
    <Stack
      direction="row"
      p={2}
      sx={{
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "flex-start",
          ml: "-7px",
          mr: "20px",
        }}
      >
        <button
          className="category-btn"
          style={{
            background: "black",
            color: "white",
            padding: "0px 25px",
          }}
          onClick={() => onDataChange(!sideBarStatus)}
        >
          <MenuIcon />
        </button>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={23} />
        </Link>
      </Stack>

      <Stack direction="row">
        <SearchBar />
        <IconButton
          type="submit"
          sx={{
            p: "2px",
            color: "white",
            backgroundColor: youtubeGray,
            height: "40px",
            width: " 40px",
          }}
          aria-label="search"
        >
          <MicIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <IconButton
          sx={{
            color: "white",
          }}
          aria-label="Upload video"
        >
          <VideoCallIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
          aria-label="Notification"
        >
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
          aria-label="Account"
        >
          <AccountCircleIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
