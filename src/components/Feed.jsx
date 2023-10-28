import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar, Navbar } from "./";
import { PrimaryColor } from "../utils/constants";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  
  return (
    <>
      <Navbar/>
      <Stack
        sx={{ flexDirection: { sx: "column", md: "row", alignItems: "center" } }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "black" }}
          >
            Copyright © 2023 by Rohit Panwar
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "black" }}
          >
            {selectedCategory} <span style={{ color: `${PrimaryColor}` }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
