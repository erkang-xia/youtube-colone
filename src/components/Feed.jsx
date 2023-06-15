import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, SideBarFull, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { recentlySearched, youtubeGray } from "../utils/constants";

const Feed = ({ sideBarStatus, onDataChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
        }}
      >
        {sideBarStatus ? (
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ) : (
          <SideBarFull
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </Box>

      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Stack
          direction="row"
          sx={{
            overflowX: "auto",
            scrollbarWidth: "none",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {recentlySearched.map((item) => (
            <button
              className="category-btn"
              onClick={() => setSelectedCategory(item)}
              style={{
                color: "white",
                backgroundColor: youtubeGray,
                marginRight: "12px",
                marginBottom: "36px",
              }}
              key={item}
            >
              <Typography
                noWrap
                variant="subtitle1"
                sx={{ color: "white", pl: "12px", pr: "12px" }}
              >
                {item}
              </Typography>
            </button>
          ))}
        </Stack>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
