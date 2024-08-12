import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoGrid from './VideoGrid';
import { fetchVideos } from '../utils/api';

const HomeContainer = styled.div`
  padding: 20px;
`;

function Home() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const newVideos = await fetchVideos(page);
    setVideos((prevVideos) => [...prevVideos, ...newVideos]);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <HomeContainer>
      <h2>Recommended Videos</h2>
      <VideoGrid videos={videos} onLoadMore={loadVideos} />
    </HomeContainer>
  );
}

export default Home;
