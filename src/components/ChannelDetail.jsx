import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, Navbar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      <Navbar/>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height: "300px",
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
        </Box >
          <Box sx={{ paddingLeft: { sx: 2,sm:2, md: "9%" },}} display="flex" justifyItems="center" alignItems="center">
            <Box sx={{ mr: { sm: "100px" } }} />
            <Videos videos={videos} />
          </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
