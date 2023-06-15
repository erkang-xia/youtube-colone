import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { useState } from "react";

const App = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const handleDataChange = (newData) => {
    setSideBarStatus(newData);
  };

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar sideBarStatus={sideBarStatus} onDataChange={handleDataChange} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                sideBarStatus={sideBarStatus}
                onDataChange={handleDataChange}
              />
            }
          ></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
